function photo(id: string, width = 2000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${width}`;
}

export const portraits = {
  studio: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1794127036/WhatsApp_Image_2026-11-08_at_11.30.35_n6krh9.jpg",
  green: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1794127036/WhatsApp_Image_2026-11-08_at_11.34.34_riul9j.jpg",
  stripes: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1794127035/WhatsApp_Image_2026-11-08_at_11.34.55_svw85u.jpg",
} as const;

export const portraitList = [portraits.studio, portraits.green, portraits.stripes];

function cutout(id: string) {
  return `https://res.cloudinary.com/dyfnobo9r/image/upload/e_background_removal/c_crop,w_1086,h_740,x_0,y_0/f_png/${id}`;
}

export const portraitCutouts = {
  studio: cutout("v1794127036/WhatsApp_Image_2026-11-08_at_11.30.35_n6krh9.png"),
  green: cutout("v1794127036/WhatsApp_Image_2026-11-08_at_11.34.34_riul9j.png"),
  stripes: cutout("v1794127035/WhatsApp_Image_2026-11-08_at_11.34.55_svw85u.png"),
} as const;

function agenda(id: string, transform: string) {
  return `https://res.cloudinary.com/dyfnobo9r/image/upload/${transform}/${id}`;
}

export const agendaImages = {
  education: agenda(
    "v1794128327/WhatsApp_Image_2026-11-08_at_11.53.53_xnse9a.jpg",
    "c_fill,g_auto,ar_4:5,w_900",
  ),
  healthcare: agenda(
    "v1794128327/WhatsApp_Image_2026-11-08_at_11.53.27_yaihfg.jpg",
    "c_fill,g_auto,ar_4:5,w_900",
  ),
  fishing: agenda(
    "v1794128327/WhatsApp_Image_2026-11-08_at_11.54.32_ovjr7v.jpg",
    "c_crop,x_1044,y_16,w_468,h_250",
  ),
  tourism: agenda(
    "v1794128327/WhatsApp_Image_2026-11-08_at_11.54.32_ovjr7v.jpg",
    "c_crop,x_28,y_528,w_460,h_230",
  ),
  roads: agenda(
    "v1794128326/WhatsApp_Image_2026-11-08_at_11.55.30_dmgqlu.jpg",
    "c_fill,g_auto,ar_4:5,w_900",
  ),
  women: agenda(
    "v1794128326/WhatsApp_Image_2026-11-08_at_11.55.11_zxjqiy.jpg",
    "c_fill,g_auto,ar_4:5,w_900",
  ),
  skills: agenda(
    "v1794128326/WhatsApp_Image_2026-11-08_at_11.54.45_bemclv.jpg",
    "c_fill,g_auto,ar_3:4,w_900",
  ),
} as const;

export const images = {
  ocean: photo("photo-1505142468610-359e7d316be0"),
  coast: photo("photo-1473496169904-658ba7c44d8a"),
  shore: photo("photo-1559827260-dc66d52bef19"),
  tide: photo("photo-1500375592092-40eb2168fd21"),
  horizon: photo("photo-1469474968028-56623f02e42e"),
  boats: photo("photo-1498654200943-1088dd4438ae"),
  lake: photo("photo-1439066615861-d1af74d74000"),
  road: photo("photo-1469854523086-cc02fe5d8800"),
  savannah: photo("photo-1547471080-7cc2caa01a7e"),
  wildlife: photo("photo-1516426122078-c23e76319801"),
  volunteers: photo("photo-1488521787991-ed7bbaae773c"),
  hands: photo("photo-1559027615-cd4628902d4a"),
  workshop: photo("photo-1531482615713-2afd69097998"),
  meeting: photo("photo-1552664730-d307ca884978"),
  team: photo("photo-1517048676732-d65bc937f952"),
  friends: photo("photo-1529156069898-49953e39b3ac"),
  speaker: photo("photo-1573164713714-d95e436ab8d6"),
  audience: photo("photo-1475721027785-f74eccf877e2"),
  conference: photo("photo-1540575467063-178a50c2df87"),
  classroom: photo("photo-1503676260728-1c00da094a0b"),
  school: photo("photo-1497486751825-1233686d5d80"),
  students: photo("photo-1427504494785-3a9ca7044f45"),
  clinic: photo("photo-1576091160399-112ba8d25d1d"),
  farm: photo("photo-1625246333195-78d9c38ad449"),
  field: photo("photo-1464226184884-fa280b87c399"),
  soil: photo("photo-1560493676-04071c5f467b"),
  garden: photo("photo-1416879595882-3373a0480b5b"),
};
