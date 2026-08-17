const fs = require('fs');

const fullMap = {
  // HISTORY
  'gen-history': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cleopatra_III_Louvre_Ma80.jpg/600px-Cleopatra_III_Louvre_Ma80.jpg',
  'hist-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/V-J_Day_in_Times_Square.jpg/600px-V-J_Day_in_Times_Square.jpg',
  'hist-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mehmed_II_by_Gentile_Bellini_1480.jpg/600px-Mehmed_II_by_Gentile_Bellini_1480.jpg',
  'hist-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bataille_de_Hattin_1187.jpg/600px-Bataille_de_Hattin_1187.jpg',
  'hist-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-of-Augustus.jpg/600px-Statue-of-Augustus.jpg',

  // KNOWLEDGE
  'gen-knowledge': 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&auto=format&fit=crop&q=80',
  'gk-200': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'gk-300': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
  'gk-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Damascus_Mosque.jpg/600px-Damascus_Mosque.jpg',
  'gk-500': 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&auto=format&fit=crop&q=80',

  // TECH
  'gen-tech': 'https://images.unsplash.com/photo-1642132652075-2b82823616f7?w=600&auto=format&fit=crop&q=80',
  'tech-200': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
  'tech-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Steve_Jobs_with_red_headphone_%28cropped%29.jpg/600px-Steve_Jobs_with_red_headphone_%28cropped%29.jpg',
  'tech-400': 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&auto=format&fit=crop&q=80',
  'tech-500': 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80',

  // ANIMALS
  'gen-animals': 'https://images.unsplash.com/photo-1568430462629-2235726c1e18?w=600&auto=format&fit=crop&q=80',
  'anim-200': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80',
  'anim-300': 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?w=600&auto=format&fit=crop&q=80',
  'anim-400': 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80',
  'anim-500': 'https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=600&auto=format&fit=crop&q=80',

  // LOGOS
  'gen-logos': 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80',
  'logo-200': 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&auto=format&fit=crop&q=80',
  'logo-300': 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop&q=80',
  'logo-400': 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=80',
  'logo-500': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80',

  // GLOBAL LOGOS
  'gen-global-logos': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
  'glogo-200': 'https://images.unsplash.com/photo-1518002171953-a08477a41221?w=600&auto=format&fit=crop&q=80',
  'glogo-300': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&auto=format&fit=crop&q=80',
  'glogo-400': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&auto=format&fit=crop&q=80',
  'glogo-500': 'https://images.unsplash.com/photo-1642132652075-2b82823616f7?w=600&auto=format&fit=crop&q=80',

  // PRODUCTS
  'gen-products': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80',
  'prod-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IPod_Classic_6G_80GB.png/600px-IPod_Classic_6G_80GB.png',
  'prod-300': 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=600&auto=format&fit=crop&q=80',
  'prod-400': 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80',
  'prod-500': 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=600&auto=format&fit=crop&q=80',

  // SCIENCE
  'gen-science': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80',
  'sci-200': 'https://images.unsplash.com/photo-1512290900673-0fb66d6c3c54?w=600&auto=format&fit=crop&q=80',
  'sci-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
  'sci-400': 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&auto=format&fit=crop&q=80',
  'sci-500': 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=600&auto=format&fit=crop&q=80',

  // SPORTS
  'gen-sports': 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80',
  'spt-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel_Messi_WC2022.jpg/600px-Lionel_Messi_WC2022.jpg',
  'spt-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Usain_Bolt_after_4_%C3%97_100_m_relay_finish_2013_World_Championships_in_Athletics.jpg/600px-Usain_Bolt_after_4_%C3%97_100_m_relay_finish_2013_World_Championships_in_Athletics.jpg',
  'spt-400': 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=600&auto=format&fit=crop&q=80',
  'spt-500': 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&auto=format&fit=crop&q=80',

  // RIDDLES
  'gen-riddles': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80',
  'rid-200': 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
  'rid-300': 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=80',
  'rid-400': 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80',
  'rid-500': 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',

  // GEOGRAPHY
  'gen-geography': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nile_river_at_Aswan.jpg/600px-Nile_river_at_Aswan.jpg',
  'geo-200': 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&auto=format&fit=crop&q=80',
  'geo-300': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80',
  'geo-400': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'geo-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Caspian_Sea_from_orbit.jpg/600px-Caspian_Sea_from_orbit.jpg',

  // CAPITALS & FLAGS
  'gen-capitals': 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&auto=format&fit=crop&q=80',
  'cap-200': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80',
  'cap-300': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=80',
  'cap-400': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=80',
  'cap-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Parliament_House_Canberra.jpg/600px-Parliament_House_Canberra.jpg',
  'gen-flags': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/600px-Flag_of_Iraq.svg.png',
  'flg-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/600px-Flag_of_Japan.svg.png',
  'flg-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/600px-Flag_of_Nepal.svg.png',
  'flg-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/600px-Flag_of_Lebanon.svg.png',
  'flg-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/600px-Flag_of_Canada_%28Pantone%29.svg.png',
  'gen-old-flags': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/White_flag_icon.svg/600px-White_flag_icon.svg.png',
  'oflg-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/600px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png',
  'oflg-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/600px-Flag_of_the_Soviet_Union.svg.png',
  'oflg-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/600px-Flag_of_France.svg.png',
  'oflg-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_the_Qing_Dynasty_%281889%E2%80%931912%29.svg/600px-Flag_of_the_Qing_Dynasty_%281889%E2%80%931912%29.svg.png',

  // KUWAIT
  'spec-kuwait-general': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/600px-Flag_of_Kuwait.svg.png',
  'kwt-gen-200': 'https://images.unsplash.com/photo-1578895210405-907db48a7111?w=600&auto=format&fit=crop&q=80',
  'kwt-gen-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Abdullah_III_Al-Salim_Al-Sabah.jpg/600px-Abdullah_III_Al-Salim_Al-Sabah.jpg',
  'kwt-gen-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kuwaiti_Baiza_1886.jpg/600px-Kuwaiti_Baiza_1886.jpg',
  'kwt-gen-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Boubyan_Island_NASA.jpg/600px-Boubyan_Island_NASA.jpg',
  'spec-kuwait-restaurants': 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&auto=format&fit=crop&q=80',
  'kwt-rst-200': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
  'kwt-rst-300': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
  'kwt-rst-400': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80',
  'kwt-rst-500': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80',
  'spec-kuwait-location': 'https://images.unsplash.com/photo-1578895210405-907db48a7111?w=600&auto=format&fit=crop&q=80',
  'kwt-loc-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sheikh_Jaber_Al-Ahmad_Al-Sabah_Causeway.jpg/600px-Sheikh_Jaber_Al-Ahmad_Al-Sabah_Causeway.jpg',
  'kwt-loc-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_Palace_Jahra.jpg/600px-Red_Palace_Jahra.jpg',
  'kwt-loc-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Failaka_Island_Ikaros.jpg/600px-Failaka_Island_Ikaros.jpg',
  'kwt-loc-500': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
  'spec-kuwait-malls': 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop&q=80',
  'kwt-malls-200': 'https://images.unsplash.com/photo-1567449303078-57ad995bd301?w=600&auto=format&fit=crop&q=80',
  'kwt-malls-300': 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80',
  'kwt-malls-400': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80',
  'kwt-malls-500': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
  'spec-kuwait-cafes': 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
  'kwt-caf-200': 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=80',
  'kwt-caf-300': 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
  'kwt-caf-400': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
  'kwt-caf-500': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80',

  // ISLAMIC
  'spec-islamic-general': 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&auto=format&fit=crop&q=80',
  'isl-gen-200': 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&auto=format&fit=crop&q=80',
  'isl-gen-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ghazwa_Badr.jpg/600px-Ghazwa_Badr.jpg',
  'isl-gen-400': 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&auto=format&fit=crop&q=80',
  'isl-gen-500': 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&auto=format&fit=crop&q=80',
  'spec-islamic-quran': 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&auto=format&fit=crop&q=80',
  'isl-qrn-200': 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&auto=format&fit=crop&q=80',
  'isl-qrn-300': 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&auto=format&fit=crop&q=80',
  'isl-qrn-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Abdul_Basit_Abdul_Samad.jpg/600px-Abdul_Basit_Abdul_Samad.jpg',
  'isl-qrn-500': 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&auto=format&fit=crop&q=80',
  'spec-islamic-seerah': 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&auto=format&fit=crop&q=80',
  'isl-srh-200': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80',
  'isl-srh-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ghar_Hira.jpg/600px-Ghar_Hira.jpg',
  'isl-srh-400': 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&auto=format&fit=crop&q=80',
  'isl-srh-500': 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&auto=format&fit=crop&q=80',
  'spec-islamic-prophets': 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&auto=format&fit=crop&q=80',
  'isl-prp-200': 'https://images.unsplash.com/photo-1568430462629-2235726c1e18?w=600&auto=format&fit=crop&q=80',
  'isl-prp-300': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
  'isl-prp-400': 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&auto=format&fit=crop&q=80',
  'isl-prp-500': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80',
  'spec-islamic-sahaba': 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&auto=format&fit=crop&q=80',
  'isl-shb-200': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'isl-shb-300': 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&auto=format&fit=crop&q=80',
  'isl-shb-400': 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&auto=format&fit=crop&q=80',
  'isl-shb-500': 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&auto=format&fit=crop&q=80',

  // SHOWS & MOVIES
  'spec-foreign-marvel': 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg',
  'mvl-200': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Thanos_MCU.jpg/600px-Thanos_MCU.jpg',
  'mvl-300': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'mvl-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mjolnir.JPG/600px-Mjolnir.JPG',
  'spec-foreign-got': 'https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg',
  'got-200': 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80',
  'got-300': 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=80',
  'got-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peter_Dinklage_by_Gage_Skidmore_2013.jpg/600px-Peter_Dinklage_by_Gage_Skidmore_2013.jpg',
  'got-500': 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&auto=format&fit=crop&q=80',
  'spec-foreign-twd': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Andrew_Lincoln_%2828704250284%29_%28cropped%29.jpg/600px-Andrew_Lincoln_%2828704250284%29_%28cropped%29.jpg',
  'twd-200': 'https://images.unsplash.com/photo-1508344928928-7165b67de128?w=600&auto=format&fit=crop&q=80',
  'twd-300': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'twd-400': 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
  'twd-500': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'spec-foreign-peaky': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cillian_Murphy_2014.jpg/600px-Cillian_Murphy_2014.jpg',
  'pky-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Cillian_Murphy_2014.jpg/600px-Cillian_Murphy_2014.jpg',
  'pky-300': 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=80',
  'spec-foreign-bb': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bryan_Cranston_by_Gage_Skidmore_2.jpg/600px-Bryan_Cranston_by_Gage_Skidmore_2.jpg',
  'bb-spec-200': 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&auto=format&fit=crop&q=80',
  'bb-spec-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bob_Odenkirk_by_Gage_Skidmore_2.jpg/600px-Bob_Odenkirk_by_Gage_Skidmore_2.jpg',
  'bb-spec-400': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80',
  'bb-spec-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chevrolet_El_Camino_SS.jpg/600px-Chevrolet_El_Camino_SS.jpg',

  // TURKISH
  'spec-turkish-general': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kenan_Imirzalioglu.jpg/600px-Kenan_Imirzalioglu.jpg',
  'tr-gen-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Necati_%C5%9Ea%C5%9Fmaz_2011.jpg/600px-Necati_%C5%9Ea%C5%9Fmaz_2011.jpg',
  'tr-gen-300': 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&auto=format&fit=crop&q=80',
  'tr-gen-400': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
  'tr-gen-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Burak_%C3%96z%C3%A7ivit_2018.jpg/600px-Burak_%C3%96z%C3%A7ivit_2018.jpg',
  'spec-turkish-ertugrul': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kayi_flag.svg/600px-Kayi_flag.svg.png',
  'ert-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Engin_Altan_D%C3%BCzyatan_2019.jpg/600px-Engin_Altan_D%C3%BCzyatan_2019.jpg',
  'ert-300': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'ert-400': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Esra_Bilgi%C3%A7.jpg/600px-Esra_Bilgi%C3%A7.jpg',
  'ert-500': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'spec-turkish-osman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Osman_I_Gazi.jpg/600px-Osman_I_Gazi.jpg',
  'osm-200': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Burak_%C3%96z%C3%A7ivit_2018.jpg/600px-Burak_%C3%96z%C3%A7ivit_2018.jpg',
  'osm-300': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
  'osm-400': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80',
  'osm-500': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
  'spec-turkish-cukur': 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&auto=format&fit=crop&q=80',
  'cuk-200': 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&auto=format&fit=crop&q=80',
  'cuk-300': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Aras_Bulut_%C4%B0ynemli.jpg/600px-Aras_Bulut_%C4%B0ynemli.jpg',
  'cuk-400': 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&auto=format&fit=crop&q=80',
  'cuk-500': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Erkan_Kol%C3%A7ak_K%C3%B6stendil.jpg/600px-Erkan_Kol%C3%A7ak_K%C3%B6stendil.jpg',

  // ANIME
  'spec-anime-general': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
  'ani-gen-200': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
  'ani-gen-300': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
  'ani-gen-400': 'https://images.unsplash.com/photo-1613371138196-c2a7c87a8f58?w=600&auto=format&fit=crop&q=80',
  'ani-gen-500': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/600px-Studio_Ghibli_logo.svg.png',
  'spec-anime-onepiece': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
  'op-spec-200': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
  'op-spec-300': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80',
  'op-spec-400': 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600&auto=format&fit=crop&q=80',
  'op-spec-500': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
  'spec-anime-pokemon': 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80',
  'pok-200': 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80',
  'pok-300': 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80',
  'pok-400': 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80',
  'pok-500': 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80',
  'spec-anime-characters': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
  'ach-200': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
  'ach-300': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
  'ach-400': 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
  'ach-500': 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80'
};

let content = fs.readFileSync('src/data/categories.ts', 'utf8');

let replacedCount = 0;
for (const [id, url] of Object.entries(fullMap)) {
  const reg = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?imageUrl:\\s*['"])[^'"]+(['"])`, 'g');
  if (reg.test(content)) {
    content = content.replace(reg, `$1${url}$2`);
    replacedCount++;
  }
}

fs.writeFileSync('src/data/categories.ts', content, 'utf8');
console.log(`Replaced image URLs for ${replacedCount} questions in categories.ts`);
