const places = [
    {
        name: "คณะทันตแพทยศาสตร์",
        latitude: 16.746548088668842,
        longitude: 100.189467953851,
        description: "-",
        hours: "-",
        address: "-",
        image: "https://static.wixstatic.com/media/6725c1_e57f09adc563486596eee29ec825016a~mv2.jpg/v1/fill/w_1301,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6725c1_e57f09adc563486596eee29ec825016a~mv2.jpg",
        //type: "education"
        model: "image/book.glb" 
    },
    {
        name: "คณะพยาบาลศาสตร์",
        latitude: 16.745481084608524, 
        longitude: 100.18958251594371,
        description: "-",
        hours: "-",
        address: "-",
        image: "https://static.wixstatic.com/media/6725c1_dce9b2e103b84c3e99180fae5602e59b~mv2.jpg/v1/fill/w_838,h_629,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6725c1_dce9b2e103b84c3e99180fae5602e59b~mv2.jpg",
        //type: "education"
        model: "image/bank.glb" 
    },
    {
        name: "คณะเภสัชศาสตร์",
        latitude: 16.74695889342043,
        longitude: 100.19014624734615,
        description: "-",
        hours: "-",
        address: "-",
        image: "https://static.wixstatic.com/media/6725c1_9e75b1222fc24d56a192cf7055b37fa5~mv2.jpg/v1/fill/w_1051,h_607,al_c,q_85,enc_auto/6725c1_9e75b1222fc24d56a192cf7055b37fa5~mv2.jpg",
        //type: "education"
        model: "image/park.glb" 
    },
    {
        name: "คณะสหเวชศาสตร์",
        latitude: 16.74597551866218,
        longitude: 100.18938943409952,
        description: "",
        hours: "",
        address: "",
        image: "https://static.wixstatic.com/media/6725c1_5fa2e92fa8a6418ab3073218337267fe~mv2.jpg/v1/fill/w_1271,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6725c1_5fa2e92fa8a6418ab3073218337267fe~mv2.jpg",
        //type: "education"
        model: "image/parking.glb" 
    },
    {
        name: "คณะแพทยศาสตร์",
        latitude: 16.74861816317913,
        longitude: 100.1890828214326,
        description: "",
        hours: "",
        address: "",
        image: "https://static.wixstatic.com/media/6725c1_ad4779d52fb14e66ad68305fadeb9c2b~mv2.jpg/v1/fill/w_1029,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6725c1_ad4779d52fb14e66ad68305fadeb9c2b~mv2.jpg",
        //type: "education"
        model: "image/education.glb" 
    },
    {
        name: "คณะสาธารณสุขศาสตร์",
        latitude: 16.74530469558421,
        longitude: 100.1898065277232,
        description: "",
        hours: "",
        address: "",
        image: "https://static.wixstatic.com/media/6725c1_c92f0e71ca3c442aa867b536e6ff3340~mv2.jpg/v1/fill/w_1269,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6725c1_c92f0e71ca3c442aa867b536e6ff3340~mv2.jpg",
       //type: "education"
        model: "image/food.glb" 
    },
    {
        name: "คณะวิทยาศาสตร์การแพทย์",
        latitude: 16.745551345997278,
        longitude: 100.19151730216483,
        description: "",
        hours: "",
        address: "",
        image: "https://static.wixstatic.com/media/6725c1_c499253d015b4b708e55d9ba4d77579b~mv2.jpg/v1/fill/w_1268,h_732,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6725c1_c499253d015b4b708e55d9ba4d77579b~mv2.jpg ",
        //type: "education"
        model: "image/muscle.glb" 
    },
    // {
    //     name: "คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
    //     latitude: 16.7465,
    //     longitude: 100.1947,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/agriculture_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะวิศวกรรมศาสตร์",
    //     latitude: 16.7471,
    //     longitude: 100.1956,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/engineering_school_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะวิทยาศาสตร์",
    //     latitude: 16.7474,
    //     longitude: 100.1962,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/science_school_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "วิทยาลัยพลังงานทดแทนและสมาร์ต กริดเทคโนโลยี",
    //     latitude: 16.7476,
    //     longitude: 100.1969,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/renewable_energy_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะสถาปัตยกรรมศาสตร์ ศิลปะและการออกแบบ",
    //     latitude: 16.7463,
    //     longitude: 100.1951,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/architecture_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะนิติศาสตร์",
    //     latitude: 16.7462,
    //     longitude: 100.1946,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/law_school_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะสังคมศาสตร์",
    //     latitude: 16.7464,
    //     longitude: 100.1948,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/social_sciences_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะศึกษาศาสตร์",
    //     latitude: 16.7461,
    //     longitude: 100.1945,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/education_school_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะมนุษยศาสตร์",
    //     latitude: 16.7460,
    //     longitude: 100.1943,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/humanities_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "คณะบริหารธุรกิจ เศรษฐศาสตร์และการสื่อสาร",
    //     latitude: 16.7458,
    //     longitude: 100.1941,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/business_school_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "วิทยาลัยนานาชาติ",
    //     latitude: 16.7459,
    //     longitude: 100.1942,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/international_college_image.jpg",
    //     type: "education"
    // },
    // {
    //     name: "อาคารสำนักงานอธิการบดี",
    //     latitude: 16.7378,
    //     longitude: 100.1998,
    //     description: "",
    //     hours: "",
    //     address: "",
    //     image: "path/to/admin_office_image.jpg",
    //     type: "central"
    // },
    // Continue adding the rest of the places following the same structure...
    {
        name: "test1 kochi",
        latitude: 16.752230431977907, 
        longitude: 100.19702072834978,
        description: "",
        hours: "",
        address: "",
        image: "image/parking.png",
        //type: "parking"
        model: "image/hospital.glb" 
    },
    {
        name: "test2 ร้านนวดป้าเขียว",
        latitude: 16.751938866019803, 
        longitude: 100.19741317834227,
        description: "",
        hours: "",
        address: "",
        image: "image/muscle.png",
        //type: "sport"
        model: "image/muscle.glb" 
    },
    {
        name: "test3 ร้านซ่อม",
        latitude: 16.75183321612489,
        longitude: 100.19640772643265,
        description: "",
        hours: "",
        address: "",
        image: "image/hospital.png",
        //type: "hospital"
        model: "image/hospital.glb" 
    },
    {
        name: "test4",
        latitude: 16.75160217329127, 
        longitude:100.19701021366706,
        description: "",
        hours: "",
        address: "",
        image: "image/motorcycle.png",
        //type: "building"
        model: "image/point.glb" 
    },
];
