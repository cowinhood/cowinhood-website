Webflow.define('tabs', module.exports = function($) {
    var api = {};
    var tram = $.tram;
    var $doc = $(document);
    var $tabs;
    var design;
    var env = Webflow.env;
    var safari = env.safari;
    var inApp = env();
    var tabAttr = 'data-w-tab';
    var paneAttr = 'data-w-pane';
    var namespace = '.w-tabs';
    var linkCurrent = 'w--current';
    var tabActive = 'w--tab-active';
    var ix = IXEvents.triggers;
    var inRedraw = false;
    // -----------------------------------
    // Module methods

    api.ready = api.design = api.preview = init;

    api.redraw = function() {
        inRedraw = true;
        init();
        inRedraw = false;
    }
    ;

    api.destroy = function() {
        $tabs = $doc.find(namespace);

        if (!$tabs.length) {
            return;
        }

        $tabs.each(resetIX);
        removeListeners();
    }
    ;
    // -----------------------------------
    // Private methods

    function init() {
        design = inApp && Webflow.env('design');
        // Find all instances on the page

        $tabs = $doc.find(namespace);

        if (!$tabs.length) {
            return;
        }

        $tabs.each(build);

        if (Webflow.env('preview') && !inRedraw) {
            $tabs.each(resetIX);
        }

        removeListeners();
        addListeners();
    }

    function removeListeners() {
        Webflow.redraw.off(api.redraw);
    }

    function addListeners() {
        Webflow.redraw.on(api.redraw);
    }

    function resetIX(i, el) {
        var data = $.data(el, namespace);

        if (!data) {
            return;
        }

        data.links && data.links.each(ix.reset);
        data.panes && data.panes.each(ix.reset);
    }

    function build(i, el) {
        var widgetHash = namespace.substr(1) + '-' + i;
        var $el = $(el);
        // Store state in data

        var data = $.data(el, namespace);

        if (!data) {
            data = $.data(el, namespace, {
                el: $el,
                config: {}
            });
        }

        data.current = null;
        data.tabIdentifier = widgetHash + '-' + tabAttr;
        data.paneIdentifier = widgetHash + '-' + paneAttr;
        data.menu = $el.children('.w-tab-menu');
        data.links = data.menu.children('.w-tab-link');
        data.content = $el.children('.w-tab-content');
        data.panes = data.content.children('.w-tab-pane');
        // Remove old events

        data.el.off(namespace);
        data.links.off(namespace);
        // This role is necessary in the ARIA spec

        data.menu.attr('role', 'tablist');
        // Set all tabs unfocusable

        data.links.attr('tabindex', '-1');
        // Set config from data attributes

        configure(data);
        // Wire up events when not in design mode

        if (!design) {
            data.links.on('click' + namespace, linkSelect(data));
            data.links.on('keydown' + namespace, handleLinkKeydown(data));
            // Trigger first intro event from current tab

            var $link = data.links.filter('.' + linkCurrent);
            var tab = $link.attr(tabAttr);
            tab && changeTab(data, {
                tab: tab,
                immediate: true
            });
        }
    }

    function configure(data) {
        var config = {};
        // Set config options from data attributes

        config.easing = data.el.attr('data-easing') || 'ease';
        var intro = parseInt(data.el.attr('data-duration-in'), 10);
        // eslint-disable-next-line no-self-compare

        intro = config.intro = intro === intro ? intro : 0;
        var outro = parseInt(data.el.attr('data-duration-out'), 10);
        // eslint-disable-next-line no-self-compare

        outro = config.outro = outro === outro ? outro : 0;
        config.immediate = !intro && !outro;
        // Store config in data

        data.config = config;
    }

    function getActiveTabIdx(data) {
        var tab = data.current;
        return Array.prototype.findIndex.call(data.links, function(t) {
            return t.getAttribute(tabAttr) === tab;
        }, null);
    }

    function linkSelect(data) {
        return function(evt) {
            evt.preventDefault();
            var tab = evt.currentTarget.getAttribute(tabAttr);
            tab && changeTab(data, {
                tab: tab
            });
        }
        ;
    }

    function handleLinkKeydown(data) {
        return function(evt) {
            var currentIdx = getActiveTabIdx(data);
            var keyName = evt.key;
            var keyMap = {
                ArrowLeft: currentIdx - 1,
                ArrowUp: currentIdx - 1,
                ArrowRight: currentIdx + 1,
                ArrowDown: currentIdx + 1,
                End: data.links.length - 1,
                Home: 0
            };
            // Bail out of function if this key is not
            // involved in tab management

            if (!(keyName in keyMap))
                return;
            evt.preventDefault();
            var nextIdx = keyMap[keyName];
            // go back to end of tabs if we wrap past the start

            if (nextIdx === -1) {
                nextIdx = data.links.length - 1;
            }
            // go back to start if we wrap past the last tab

            if (nextIdx === data.links.length) {
                nextIdx = 0;
            }

            var tabEl = data.links[nextIdx];
            var tab = tabEl.getAttribute(tabAttr);
            tab && changeTab(data, {
                tab: tab
            });
        }
        ;
    }

    function changeTab(data, options) {
        options = options || {};
        var config = data.config;
        var easing = config.easing;
        var tab = options.tab;
        // Don't select the same tab twice

        if (tab === data.current) {
            return;
        }

        data.current = tab;
        /**
 * The currently active tab.
 * Will be referenced to manage focus after
 * TabLink attributes are changed
 * @type {HTMLAnchorElement}
 */

        var currentTab;
        // Select the current link

        data.links.each(function(i, el) {
            var $el = $(el);
            // Add important attributes at build time.

            if (options.immediate || config.immediate) {
                // Store corresponding pane for reference.
                var pane = data.panes[i];
                // IDs are necessary for ARIA relationships,
                // so if the user did not create one, we create one
                // using our generated identifier

                if (!el.id) {
                    el.id = data.tabIdentifier + '-' + i;
                }

                if (!pane.id) {
                    pane.id = data.paneIdentifier + '-' + i;
                }

                el.href = '#' + pane.id;
                // Tab elements must take this role

                el.setAttribute('role', 'tab');
                // Tab elements must reference the unique ID of the panel
                // that they control

                el.setAttribute('aria-controls', pane.id);
                // Tab elements must report that they are not selected
                // by default

                el.setAttribute('aria-selected', 'false');
                // Panes must take on the `Tabpanel` role

                pane.setAttribute('role', 'tabpanel');
                // Elements with tabpanel role must be labelled by
                // their controlling tab

                pane.setAttribute('aria-labelledby', el.id);
            }

            if (el.getAttribute(tabAttr) === tab) {
                // This is the current tab. Store it.
                currentTab = el;
                $el.addClass(linkCurrent).removeAttr('tabindex').attr({
                    'aria-selected': 'true'
                }).each(ix.intro);
            } else if ($el.hasClass(linkCurrent)) {
                $el.removeClass(linkCurrent).attr({
                    tabindex: '-1',
                    'aria-selected': 'false'
                }).each(ix.outro);
            }
        });
        // Find the new tab panes and keep track of previous

        var targets = [];
        var previous = [];
        data.panes.each(function(i, el) {
            var $el = $(el);

            if (el.getAttribute(tabAttr) === tab) {
                targets.push(el);
            } else if ($el.hasClass(tabActive)) {
                previous.push(el);
            }
        });
        var $targets = $(targets);
        var $previous = $(previous);
        // Switch tabs immediately and bypass transitions

        if (options.immediate || config.immediate) {
            $targets.addClass(tabActive).each(ix.intro);
            $previous.removeClass(tabActive);
            // Redraw to benefit components in the hidden tab pane
            // But only if not currently in the middle of a redraw

            if (!inRedraw) {
                Webflow.redraw.up();
            }

            return;
        }// Focus if this is not the on-page-load call to `changeTab`
        else {
            // Backwards compatible hack to prevent focus from scrolling
            var x = window.scrollX;
            var y = window.scrollY;
            currentTab.focus();
            window.scrollTo(x, y);
        }
        // Fade out the currently active tab before intro

        if ($previous.length && config.outro) {
            $previous.each(ix.outro);
            tram($previous).add('opacity ' + config.outro + 'ms ' + easing, {
                fallback: safari
            }).start({
                opacity: 0
            }).then(function() {
                return fadeIn(config, $previous, $targets);
            });
        } else {
            // Skip the outro and play intro
            fadeIn(config, $previous, $targets);
        }
    }
    // Fade in the new target

    function fadeIn(config, $previous, $targets) {
        // Clear previous active class + styles touched by tram
        // We cannot remove the whole inline style because it could be dynamically bound
        $previous.removeClass(tabActive).css({
            opacity: '',
            transition: '',
            transform: '',
            width: '',
            height: ''
        });
        // Add active class to new target

        $targets.addClass(tabActive).each(ix.intro);
        Webflow.redraw.up();
        // Set opacity immediately if intro is zero

        if (!config.intro) {
            return tram($targets).set({
                opacity: 1
            });
        }
        // Otherwise fade in opacity

        tram($targets).set({
            opacity: 0
        }).redraw().add('opacity ' + config.intro + 'ms ' + config.easing, {
            fallback: safari
        }).start({
            opacity: 1
        });
    }
    // Export module

    return api;
}
);