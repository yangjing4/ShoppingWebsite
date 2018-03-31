import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const shoppingitems = [
      {
        name : 'New Shampoo by Lush',
        img : './assets/img/s4.jpg',
        price : 24.99,
        description : 'This isn\'t our newest shampoo bar, we call it New because it\'s full of stimulating essential oils to encourage healthy hair growth. ' +
        'We put in refreshing peppermint and cinnamon infusions for a healthy scalp and stimulating rosemary and nettle absolutes for shine. ',
        evaluate: 4.7
      },
      {
        name : 'Dyson Hair Dryer',
        img : './assets/img/s6.jpg',
        price : 420,
        description : 'Helps prevent extreme heat damage to protect natural shine: Air temperature is measured 20 times every second, keeping the temperature under control. ' +
        'You can dry without the risk of extreme heat damage.',
        evaluate: 5.0
      },
      {
        name : 'LG Shampoo',
        img : './assets/img/s8.jpg',
        price : 11,
        description : '1.\tThe scalp is refreshed and hair becomes silky and smooth without slippery feeling\n' +
        '2.\tShampoo plus hair essence plus treatment\n' +
        '3.\tMost of ingredients are from the nature\n',
        evaluate: 4.6
      },
      {
        name : 'Spraygrpund Backpack',
        img : './assets/img/b1.jpg',
        price : 70,
        description : '1.\t100% POLYESTER\n' +
        '2.\tDimensions: 18" x 6" x 11.5"\n' +
        '3.\tZippered Stash pocket\n' +
        '4.\tSeparate Laptop compartment & Tablet Compartment\n' +
        '5.\tDurable 900D water-resistant fabric\n',
        evaluate: 4.6
      },
      {
        name : 'Coach Backpack',
        img : './assets/img/b2.jpg',
        price : 651,
        description : 'Details Calf leather Inside zip and multifunction pockets Zip-top closurefabric lining Adjustable straps Outside zip pocket 13 3/4" (L) x 17 1/4" (H) x 6" (W)\n',
        evaluate: 4.0
      },
      {
        name : 'Fjallraven Backpack',
        img : './assets/img/b4.jpg',
        price : 75,
        description : '1.\tVinylon F\n' +
        '2.\tImported\n' +
        '3.\tICONIC SCANDINAVIAN DESIGN: The Fjallraven Kanken-Mini is a sister style to the Kanken classic school pack that has been in style since 1978.\n',
        evaluate: 4.7
      },
      {
        name : 'JanSport Backpack',
        img : './assets/img/b5.jpg',
        price : 20,
        description : '1.\tFabric\n' +
        '2.\tImported\n' +
        '3.\t100% man made materials lining\n' +
        '4.\tzipper closure\n' +
        '5.\t14" shoulder drop\n' +
        '6.\t16" high\n' +
        '7.\t12" wide\n' +
        '8.\tOne main compartment and one small front pockets\n',
        evaluate: 4.32
      },
      {
        name : 'MCM Stark Backpack',
        img : './assets/img/b6.jpg',
        price : 925,
        description : 'Leather top handle\n' +
        'Adjustable shoulder straps\n' +
        'Front zipped pocket\n' +
        '2 exterior flat pockets at sides\n' +
        '2 interior pockets with sleeve for tablet storage\n' +
        '2-way zip around closure\n' +
        'Cotton twill lining\n' +
        '13 X 10 X 4 inches\n' +
        'Coated Canvas body\n' +
        'Leather /leather trim\n' +
        'Imported\n',
        evaluate: 4.47
      },
      {
        name : 'MCM Stark Backpack In White Logo Visetos',
        img : './assets/img/b7.jpg',
        price : 790,
        description : 'Leather top handle\n' +
        'Adjustable shoulder straps\n' +
        'Front zipped pocket\n' +
        '2 exterior flat pockets at sides\n' +
        '2 interior pockets with sleeve for tablet storage\n' +
        '2-way zip around closure\n' +
        'Cotton twill lining\n' +
        '13 X 10 X 4 inches\n' +
        'Coated Canvas body\n' +
        'Leather /leather trim\n' +
        'Imported\n',
        evaluate: 4.6
      },
      {
        name : 'GNC strength fish oil',
        img : './assets/img/g1.jpg',
        price : 15,
        description : '1000mg of EPA/DHA Omega-3s. \n' +
        'Supports heart, brain, skin, eye & joint health.*\n' +
        'Enteric coated to help control fishy burps - guaranteed.\n' +
        'Free of mercury, lead, heavy metals and PCBs\n' +
        'From wild, deep ocean fish.\n',
        evaluate: 4.5
      },
      {
        name : 'GNC Grape Seed Extract',
        img : './assets/img/g3.jpg',
        price : 30,
        description : 'Provides Antioxidant Support.*',
        evaluate: 4.8
      },
      {
        name : 'GNC COQ-10 MG',
        img : './assets/img/g2.jpg',
        price : 34,
        description : 'Clinically shown to support heart health*\n' +
        'Helps replenish CoQ-10 levels reduced by statin drugs\n',
        evaluate: 4.8
      },
      {
        name : 'GNC Women’s Ultra Mega',
        img : './assets/img/g4.jpg',
        price : 19.99,
        description : 'Ultra Concentrated with 39 important nutrients.\n' +
        'Provides 18 vitamins & minerals at 100% daily value or more\n' +
        'Strengthens bones with calcium and vitamin D-3*\n' +
        'B vitamins to support energy production and metabolism\n',
        evaluate: 4.7
      },
      {
        name : 'GNC Energy Formula',
        img : './assets/img/g5.jpg',
        price : 14.99,
        description : 'Improves Mental Alertness, Enhances Physical Performance & Fuels Metabolism*',
        evaluate: 4.8
      },
      {
        name : 'GNC Mega Men',
        img : './assets/img/g6.jpg',
        price : 20,
        description : 'Ultra concentrated with 39 important nutrients.*\n' +
        'Provides 19 vitamins & minerals at 100% daily value or more.\n',
        evaluate: 4.8
      },
      {
        name : 'Calvin Klein Bold Watch',
        img : './assets/img/w1.jpg',
        price : 249,
        description : 'Three Hand\n' +
        'CASE\n' +
        'Shape:Round\n' +
        'Finish:Polished\n' +
        'Material:Stainless Steel\n' +
        'Width:41 mm without crown\n' +
        'Case Length with Lugs:52 mm\n' +
        'Water Resistance:50 m (165 feet)\n',
        evaluate: 4.9
      },
      {
        name : 'HAMILTON Classic Watch',
        img : './assets/img/w2.jpg',
        price : 1345,
        description : 'Two Hand\n' +
        'Small Seconds\n' +
        'Date\n' +
        'CASE\n' +
        'Shape:Round\n' +
        'Finish:Polished and Brushed\n' +
        'Material:Stainless Steel\n' +
        'Width:42 mm without crown\n' +
        'Case Length with Lugs:50 mm\n' +
        'Water Resistance:50 m (165 feet)\n' +
        'Crystal:Sapphire Crystal Scratch Resistant\n' +
        'Thickness:14 mm\n' +
        'Case Back:Screw-In Sapphire Crystal See-Through\n',
        evaluate: 4.78
      },
      {
        name : 'EDOX Les Vauberts Watch',
        img : './assets/img/w3.jpg',
        price : 1300,
        description : 'Three Hand\n' +
        'Date\n' +
        'CASE\n' +
        'Shape:Round\n' +
        'Finish:Polished\n' +
        'Material:Stainless Steel\n' +
        'Width:40 mm without crown\n' +
        'Case Length with Lugs:48 mm\n' +
        'Water Resistance:50 m (165 feet)\n' +
        'Crystal:Sapphire Crystal Scratch Resistant\n' +
        'Thickness:10 mm\n' +
        'Case Back:Screw-In Sapphire Crystal See-Through\n',
        evaluate: 4.8
      },
      {
        name : 'Calvin Klein Stately Watch',
        img : './assets/img/w4.jpg',
        price : 289,
        description : 'Two Hand\n' +
        'CASE\n' +
        'Shape:Round\n' +
        'Finish:Polished\n' +
        'Material:Stainless Steel\n' +
        'Width:33 mm without crown\n' +
        'Case Length with Lugs:42 mm\n' +
        'Water Resistance:30 m (100 feet)\n' +
        'Crystal:Mineral Crystal\n' +
        'Thickness:8 mm\n' +
        'Case Back:Snap Back Closed\n',
        evaluate: 4.8
      },
      {
        name : 'MOVADO Miri Watch',
        img : './assets/img/w5.jpg',
        price : 695,
        description : 'Two Hand\n' +
        'CASE\n' +
        'Shape:Barrel Tonneau\n' +
        'Finish:Polished\n' +
        'Material:Stainless Steel\n' +
        'Width:23 mm without crown\n' +
        'Case Length with Lugs:35 mm\n' +
        'Water Resistance:30 m (100 feet)\n' +
        'Crystal:Sapphire Crystal Scratch Resistant\n' +
        'Thickness:6 mm\n',
        evaluate: 4.66
      },
      {
        name : 'MOVADO Miri Watch',
        img : './assets/img/w6.jpg',
        price : 595,
        description : 'Two Hand\n' +
        'CASE\n' +
        'Shape:Barrel Tonneau\n' +
        'Finish:Polished\n' +
        'Material:Stainless Steel\n' +
        'Width:23 mm without crown\n' +
        'Case Length with Lugs:35 mm\n' +
        'Water Resistance:30 m (100 feet)\n' +
        'Crystal:Sapphire Crystal Scratch Resistant\n' +
        'Thickness:6 mm\n',
        evaluate: 4.8
      },
      {
        name : 'Logitech M325 Mouse',
        img : './assets/img/m1.jpg',
        price : 15,
        description : '1.\tAdvanced optical mouse with responsive tracking\n' +
        '2.\tWireless mouse reduces workspace clutter\n' +
        '3.\t3-button mouse for better functionality and fast scrolling capability\n',
        evaluate: 4.1
      },
      {
        name : 'OMEN Desktop PC',
        img : './assets/img/m2.jpg',
        price : 1699,
        description : 'Go from gamer to gaming legend with the thrilling level of power competition demands. This OMEN desktop combines cutting-edge design and the industry’s latest hardware to deliver a performance monster, ready to handle intensive AAA games with ease, and look good doing it.',
        evaluate: 4.8
      },
      {
        name : 'Logitech G413 Keyboard',
        img : './assets/img/m3.jpg',
        price : 89.9,
        description : 'What\'s in the Box:\n' +
        '- Gaming keyboard.\n' +
        '- Gaming keycaps.\n' +
        '- Keycap puller.\n' +
        '- User documentation.\n' +
        'System Requirements: Windows 10, Windows 8.1, Windows 8, Windows 7 or later; 1 USB port for keyboard; 1 USB port for USB passthrough; Internet access for Logitech Gaming Software.\n',
        evaluate: 4.8
      },
      {
        name : 'Disney Mickey Toaster',
        img : './assets/img/m4.jpg',
        price : 24,
        description : 'What\'s in the Box:\n' +
        '- Gaming keyboard.\n' +
        '- Gaming keycaps.\n' +
        '- Keycap puller.\n' +
        '- User documentation.\n' +
        'System Requirements: Windows 10, Windows 8.1, Windows 8, Windows 7 or later; 1 USB port for keyboard; 1 USB port for USB passthrough; Internet access for Logitech Gaming Software.\n',
        evaluate: 4.72
      },
      {
        name : 'Lenovo IdeaCentre Y700',
        img : './assets/img/m5.jpg',
        price : 1149,
        description : 'Built for hardcore gamers, the Lenovo Ideacentre™ Y700 is powered by the latest Intel® Core™ i Series processors and NVIDIA® GeForce® GTX graphics. So go ahead and crank up every setting to the max - and take your gaming to new levels.',
        evaluate: 4.8
      },
      {
        name : 'Razer Firefly Mouse Mat',
        img : './assets/img/m6.jpg',
        price : 59.9,
        description : 'Featuring a micro-textured finish for accuracy, hyper-responsive tracking, and a non-slip rubber base, the Razer Firefly takes your action-packed gaming to the next level. Plus, it has 16.8 million customizable colors to help liven up game time.  Works with other Razer Chroma devices. Requires Razer Synapse registration and Internet connection for full activation.',
        evaluate: 4.8
      },
      {
        name : 'Nike Air Running Shoes',
        img : './assets/img/e1.jpg',
        price : 200,
        description : 'Flyknit construction on the Nike Air VaporMax for zonal stretching and support\n' +
        'Adjustable gore strap wraps the midfoot for a locked down fit\n' +
        'Revolutionary VaporMax Air sole for soft, lightweight responsiveness\n' +
        'Strategic cushioning for optimal flexibility\n' +
        'Rubber pods in high-wear areas for enhanced durability\n' +
        'Integrated lugs on the outsole for traction\n',
        evaluate: 4.67
      },
      {
        name : 'PUMA Women’s Creeper',
        img : './assets/img/e2.jpg',
        price : 160,
        description : 'Special edition with Classic Creeper styling\n' +
        '3D embroidered formstripe and heart design\n' +
        'CLF logo on the heel\n' +
        'Traditional ridged Creeper platform sole\n' +
        'Padded tongue and collar for comfort\n' +
        '100% leather\n',
        evaluate: 4.33
      },
      {
        name : 'Reebok Leather SG',
        img : './assets/img/e3.jpg',
        price : 80,
        description : 'Classic style reigns supreme this season. We created our men\'s Seasonal Gum Pack to dish out throwback looks with up-to-date styling. Soft nubuck leather smoothes out the look while the OG gum sole keeps the silhouette authentic.\n' +
        'Designed for: Classic looks, on-trend style, casual wear\n' +
        'Low-cut design for a sleek and sophisticated silhouette\n' +
        'EVA foam midsole cushions each step\n' +
        'Gum rubber outsole for traction with heritage appeal\n' +
        'Clean, seasonal colors ride well over the gum sole\n' +
        'Materials: Pigskin nubuck upper with a leather heel accent for support\n' +
        'Imported\n',
        evaluate: 4.76
      },
      {
        name : 'UGG Unlined Mini',
        img : './assets/img/e4.jpg',
        price : 120,
        description : 'This luxe update to our Classic Mini has been crafted from soft suede and left unlined for a lightweight feel. It’s finished with our innovative Treadlite by UGG™ sole for unmatchable (lightweight!) traction on any surface.\n' +
        'Suede\n' +
        'Cotton lining in vamp\n' +
        'Leather insole\n' +
        'Treadlite by UGG™ outsole\n' +
        '5" shaft height\n' +
        'This product is made in China\n',
        evaluate: 4.65
      },
      {
        name : 'The Lowland Boot',
        img : './assets/img/e5.jpg',
        price : 120,
        description : 'MEASUREMENTS Heel height: 1.25", 30mm\n' +
        'Shaft height: 23"\n' +
        'Shaft circumference: 14"\n' +
        'All measurements are made on a size 6 shoe. There may be slight measurement variations based on size.\n' +
        'FEATURES Flat over-the-knee boot\n' +
        'Thigh-high\n' +
        'Signature nap pa leather tie back detail\n' +
        'Stretch suede is spliced and backed with Lycra to achieve the fit of a legging\n' +
        'MATERIALS Stretch suede\n' +
        'Leather insole\n' +
        'Rubber sole\n',
        evaluate: 4.89
      },
      {
        name : 'The Chicpearl Flat',
        img : './assets/img/e6.jpg',
        price : 239,
        description : 'MEASUREMENTS Heel height: 0.5", 15mm\n' +
        '\n' +
        'All measurements are made on a size 6 shoe. There may be slight measurement variations based on size.\n' +
        'FEATURES Ballet flat\n' +
        'Round toe\n' +
        'High-cut vamp\n' +
        'Pearl-encrusted flat heel\n' +
        'Inspired by the CHICFLAT\n' +
        'MATERIALS Suede\n' +
        'Leather insole \n' +
        'Leather sole with rubber insert in middle\n' +
        'MADE IN Spain\n',
        evaluate: 4.8
      },
      {
        name : 'Canada Goose Parka',
        img : './assets/img/c1.jpg',
        price : 995,
        description : 'Color/pattern: graphite\n' +
        'Approximately 34in from shoulder to hem\n' +
        'Measurement was taken from a size small and may vary slightly by size\n' +
        'Design details: hooded back with wiring and faux fur trim, dual chest flap pockets, dual zippered chest pockets, two front flap pockets, two zippered front pockets, flap pocket at right sleeve, two pen pockets at left sleeve, rib-knit inner cuffs, inner drawcord at waist, inner fitted hem, quilted lining, interior pocket\n' +
        'Zipper and Velcro® closure\n' +
        'Heavyweight\n' +
        'Shell: 85% polyester, 15% cotton\n' +
        'Lining: 100% nylon\n' +
        'Fill: white duck down\n' +
        'Fur: 100% natural coyote (Canada)\n' +
        'Dry clean only\n' +
        'Made in Canada\n' +
        'RN#: 68F8490\n',
        evaluate: 5.0
      },
      {
        name : 'Canada Goose Parka',
        img : './assets/img/c2.jpg',
        price : 475,
        description : 'Color/pattern: Arctic dusk\n' +
        'Approximately 27.5in from shoulder to hem\n' +
        'Measurement was taken from a size small and may vary slightly by size\n' +
        'Design details: hooded back, inner cuffs with thumbholes, two zippered front pockets, interior pocket, high-low hem\n' +
        'Zipper closure\n' +
        'Medium weight\n' +
        'Shell: 86% nylon, 14% spandex\n' +
        'Contrast: 100% polyurethane\n' +
        'Backing: 100% polyester\n' +
        'Machine wash\n' +
        'Made in Canada\n',
        evaluate: 4.77
      },
      {
        name : 'MCM Patricia Shoulder Bag',
        img : './assets/img/k1.jpg',
        price : 440,
        description : 'Detachable jacquard shoulder strap with leather pad\n' +
        'Exterior front zip compartment\n' +
        'Main compartment has interior padded sleeve for 13" laptop storage, 2 pen slots, double open pocket and leather side pocket\n' +
        '11 X 15 X 1 inches\n' +
        'Coated Canvas body\n' +
        'Leather trim\n' +
        'Imported\n',
        evaluate: 4.48
      },
      {
        name : 'MCM Klara Hobo In Monogrammed Leather',
        img : './assets/img/k2.jpg',
        price : 765,
        description : 'Adjustable jacquard shoulder strap with leather pad\n' +
        'Exterior front zip pocket\n' +
        'Main compartment has interior side zip pocket and 2 open pockets\n' +
        'Shiny silver-tone cobalt hardware\n' +
        '12 X 11 X 2 inches\n' +
        'Leather body\n' +
        'Imported\n',
        evaluate: 4.4
      },
      {
        name : 'MCM Ottomar Grained',
        img : './assets/img/k3.jpg',
        price : 383,
        description : 'Adjustable leather strap\n' +
        'Front flap closure with laurel-engraved push-lock fastening\n' +
        'Two main compartments\n' +
        'Interior side zip pocket and open pocket\n' +
        'Removable leather covered hangtag\n' +
        'Microsuede lining\n' +
        '7 X 8 X 3 inches\n' +
        'Coated Canvas body\n' +
        'Leather /leather trim\n' +
        'Imported\n',
        evaluate: 4.79
      },
      {
        name : 'MCM Ottomar Briefcase',
        img : './assets/img/k4.jpg',
        price : 725,
        description : 'Adjustable leather shoulder strap\n' +
        'Front flap closure with laurel engraved push-lock fastening\n' +
        'Two main compartments\n' +
        'Interior side zip pocket and open pocket\n' +
        'Removable leather covered hangtag\n' +
        'Microsuede lining\n' +
        'Fur type: Dyed Mink\n' +
        'Fur origin: Denmark\n' +
        '7 X 8 X 3 inches\n' +
        'Coated Canvas body\n' +
        'Leather /leather /mink trim\n' +
        'Imported\n',
        evaluate: 4.19
      },
      {
        name : 'MAC Patricia Shoulder Bag',
        img : './assets/img/k5.jpg',
        price : 725,
        description : 'Adjustable leather shoulder strap\n' +
        'Front flap closure with laurel engraved push-lock fastening\n' +
        'Two main compartments\n' +
        'Interior side zip pocket and open pocket\n' +
        'Removable leather covered hangtag\n' +
        'Microsuede lining\n' +
        'Fur type: Dyed Mink\n' +
        'Fur origin: Denmark\n' +
        '7 X 8 X 3 inches\n' +
        'Coated Canvas body\n' +
        'Leather /leather /mink trim\n' +
        'Imported\n',
        evaluate: 4.93
      },
      {
        name : 'MCM Milla Tote In Crystal Tweed',
        img : './assets/img/k6.jpg',
        price : 2250,
        description : 'Adjustable leather shoulder strap\n' +
        'Front flap closure with laurel engraved push-lock fastening\n' +
        'Two main compartments\n' +
        'Interior side zip pocket and open pocket\n' +
        'Removable leather covered hangtag\n' +
        'Microsuede lining\n' +
        'Fur type: Dyed Mink\n' +
        'Fur origin: Denmark\n' +
        '7 X 8 X 3 inches\n' +
        'Coated Canvas body\n' +
        'Leather /leather /mink trim\n' +
        'Imported\n',
        evaluate: 4.91
      },
      {
        name : 'LEGO Star Wars Walker',
        img : './assets/img/go1.jpg',
        price : 49.99,
        description : 'Stomp into battle with the First Order Heavy Scout Walker\n' +
        'Includes 4 LEGO® Star Wars™ minifigures\n' +
        'cockpit with opening top hatch\n',
        evaluate: 4.33
      },
      {
        name : 'LEGO Star Wars Jedi BB-8',
        img : './assets/img/go2.jpg',
        price : 79.88,
        description : 'Stomp into battle with the First Order Heavy Scout Walker\n' +
        'Includes 4 LEGO® Star Wars™ minifigures\n' +
        'cockpit with opening top hatch\n',
        evaluate: 4.98
      },
      {
        name : 'Spirit Deluxe Set',
        img : './assets/img/go3.jpg',
        price : 49.99,
        description : 'Press the button on Spirit\'s back to activate life-like mouth movement and horse sounds\n' +
        'Spirit can eat the carrots\n' +
        'Spirit features realistic horse sounds\n',
        evaluate: 4.26
      },
      {
        name : 'LEGO Disney Cars Pit Stop',
        img : './assets/img/go4.jpg',
        price : 9.99,
        description : 'Includes buildable Guido and Luigi characters from Disney-Pixar Cars 3\n' +
        'Features a buildable pit stop with rotating number 95 pit sign\n' +
        'Includes Easy to Build models with bigger pieces and a simple guide to get kids building and playing quickly\n' +
        'Accessory elements include an air hose, fuel can and spare tire\n' +
        'Both cars measure over 1” (4cm) high, 1” (4cm) long and 1” (3cm) wide\n' +
        'Pit stop measures over 2” (7cm) high, 2” (7cm) wide and 2” (7cm) deep, and 4” (11cm) wide with number 95 sign extended\n',
        evaluate: 4.35
      },
      {
        name : 'Spirit Barn Playset',
        img : './assets/img/go5.jpg',
        price : 49.99,
        description : 'Comes with over 23 pieces including stickers that can be used to decorate the barn!\n' +
        'Lucky doll has poseable arms and legs\n' +
        'Upstairs hideaway\n' +
        'Two-sided play\n',
        evaluate: 4.99
      },
      {
        name : 'My Little Pony',
        img : './assets/img/go6.jpg',
        price : 90.99,
        description : 'Comes with over 23 pieces including stickers that can be used to decorate the barn!\n' +
        'Lucky doll has poseable arms and legs\n' +
        'Upstairs hideaway\n' +
        'Two-sided play\n',
        evaluate: 4.7
      },
    ];
    return {shoppingitems};
  }
}
