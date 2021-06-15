import assembly from "./icons/png-64/assembly.png";
import bara from "./icons/png-64/bara.png";
import charminar from "./icons/png-64/charminar.png";
import chennai from "./icons/png-64/chennai.png";
import gatewayofindia from "./icons/png-64/gatewayofindia.png";
import hawamahal from "./icons/png-64/hawamahal.png";
import jhultaminar from "./icons/png-64/jhultaminar.png";
import kerala from "./icons/png-64/kerala.png";
import tajmahal from "./icons/png-64/tajmahal.png";
import victoria from "./icons/png-64/victoria.png";

interface Data {
  name: string;
  chat_id: string;
  channel_name: string;
  icon: string;
}

const data: Data[] = [
  {
    name: "Bengaluru",
    chat_id: "cowinhood_blr_u45",
    channel_name: "CowinHood U45 Bengaluru",
    icon: bara,
  },
  {
    name: "All Metros",
    chat_id: "cowinhood_metros",
    channel_name: "CowinHood U45 Metros",
    icon: assembly,
  },
  {
    name: "Hyderabad",
    chat_id: "cowinhood_hyd_u45",
    channel_name: "CowinHood U45 Hyderabad",
    icon: charminar,
  },
  {
    name: "Gurugram",
    chat_id: "cowinhood_ggn_u45",
    channel_name: "CowinHood U45 Gurgaon",
    icon: hawamahal,
  },
  {
    name: "Mumbai",
    chat_id: "cowinhood_mum_u45",
    channel_name: "CowinHood U45 Mumbai",
    icon: gatewayofindia,
  },
  {
    name: "Delhi",
    chat_id: "cowinhood_del_u45",
    channel_name: "CowinHood U45 Delhi",
    icon: tajmahal,
  },
  {
    name: "Chennai",
    chat_id: "cowinhood_maa_u45",
    channel_name: "CowinHood U45 Chennai",
    icon: chennai,
  },
  {
    name: "Kolkatta",
    chat_id: "cowinhood_kol_u45",
    channel_name: "CowinHood U45 Kolkatta",
    icon: victoria,
  },
  {
    name: "Ahmedabad",
    chat_id: "cowinhood_amd_u45",
    channel_name: "CowinHood U45 Ahmedabad",
    icon: jhultaminar,
  },
  {
    name: "Ernakulam (Kochi)",
    chat_id: "cowinhood_ernk_u45",
    channel_name: "CowinHood U45 Ernakulam",
    icon: kerala,
  },
];

export default data;
