const cityOptions = [
  {
    value: "Achalpur",
    label: "Achalpur",
  },
  {
    value: "Achhnera",
    label: "Achhnera",
  },
  {
    value: "Adalaj",
    label: "Adalaj",
  },
  {
    value: "Adilabad",
    label: "Adilabad",
  },
  {
    value: "Adityapur",
    label: "Adityapur",
  },
  {
    value: "Adoni",
    label: "Adoni",
  },
  {
    value: "Adoor",
    label: "Adoor",
  },
  {
    value: "Adra",
    label: "Adra",
  },
  {
    value: "Adyar",
    label: "Adyar",
  },
  {
    value: "Afzalpur",
    label: "Afzalpur",
  },
  {
    value: "Agartala",
    label: "Agartala",
  },
  {
    value: "Agra",
    label: "Agra",
  },
  {
    value: "Ahmedabad",
    label: "Ahmedabad",
  },
  {
    value: "Ahmednagar",
    label: "Ahmednagar",
  },
  {
    value: "Aizawl",
    label: "Aizawl",
  },
  {
    value: "Ajmer",
    label: "Ajmer",
  },
  {
    value: "Akola",
    label: "Akola",
  },
  {
    value: "Akot",
    label: "Akot",
  },
  {
    value: "Alappuzha",
    label: "Alappuzha",
  },
  {
    value: "Aligarh",
    label: "Aligarh",
  },
  {
    value: "Alipurdurban Agglomerationr",
    label: "Alipurdurban Agglomerationr",
  },
  {
    value: "Alirajpur",
    label: "Alirajpur",
  },
  {
    value: "Allahabad",
    label: "Allahabad",
  },
  {
    value: "Alwar",
    label: "Alwar",
  },
  {
    value: "Amalapuram",
    label: "Amalapuram",
  },
  {
    value: "Amalner",
    label: "Amalner",
  },
  {
    value: "Ambejogai",
    label: "Ambejogai",
  },
  {
    value: "Ambikapur",
    label: "Ambikapur",
  },
  {
    value: "Amravati",
    label: "Amravati",
  },
  {
    value: "Amreli",
    label: "Amreli",
  },
  {
    value: "Amritsar",
    label: "Amritsar",
  },
  {
    value: "Amroha",
    label: "Amroha",
  },
  {
    value: "Anakapalle",
    label: "Anakapalle",
  },
  {
    value: "Anand",
    label: "Anand",
  },
  {
    value: "Anantapur",
    label: "Anantapur",
  },
  {
    value: "Anantnag",
    label: "Anantnag",
  },
  {
    value: "Anjangaon",
    label: "Anjangaon",
  },
  {
    value: "Anjar",
    label: "Anjar",
  },
  {
    value: "Ankleshwar",
    label: "Ankleshwar",
  },
  {
    value: "Arakkonam",
    label: "Arakkonam",
  },
  {
    value: "Arambagh",
    label: "Arambagh",
  },
  {
    value: "Araria",
    label: "Araria",
  },
  {
    value: "Arrah",
    label: "Arrah",
  },
  {
    value: "Arsikere",
    label: "Arsikere",
  },
  {
    value: "Aruppukkottai",
    label: "Aruppukkottai",
  },
  {
    value: "Arvi",
    label: "Arvi",
  },
  {
    value: "Arwal",
    label: "Arwal",
  },
  {
    value: "Asansol",
    label: "Asansol",
  },
  {
    value: "Asarganj",
    label: "Asarganj",
  },
  {
    value: "Ashok Nagar",
    label: "Ashok Nagar",
  },
  {
    value: "Athni",
    label: "Athni",
  },
  {
    value: "Attingal",
    label: "Attingal",
  },
  {
    value: "Aurangabad",
    label: "Aurangabad",
  },
  {
    value: "Azamgarh",
    label: "Azamgarh",
  },
  {
    value: "Bagaha",
    label: "Bagaha",
  },
  {
    value: "Bageshwar",
    label: "Bageshwar",
  },
  {
    value: "Bahadurgarh",
    label: "Bahadurgarh",
  },
  {
    value: "Baharampur",
    label: "Baharampur",
  },
  {
    value: "Bahraich",
    label: "Bahraich",
  },
  {
    value: "Balaghat",
    label: "Balaghat",
  },
  {
    value: "Balangir",
    label: "Balangir",
  },
  {
    value: "Baleshwar Town",
    label: "Baleshwar Town",
  },
  {
    value: "Ballari",
    label: "Ballari",
  },
  {
    value: "Balurghat",
    label: "Balurghat",
  },
  {
    value: "Bankura",
    label: "Bankura",
  },
  {
    value: "Bapatla",
    label: "Bapatla",
  },
  {
    value: "Baramula",
    label: "Baramula",
  },
  {
    value: "Barbil",
    label: "Barbil",
  },
  {
    value: "Bargarh",
    label: "Bargarh",
  },
  {
    value: "Barh",
    label: "Barh",
  },
  {
    value: "Baripada Town",
    label: "Baripada Town",
  },
  {
    value: "Barmer",
    label: "Barmer",
  },
  {
    value: "Barnala",
    label: "Barnala",
  },
  {
    value: "Barpeta",
    label: "Barpeta",
  },
  {
    value: "Batala",
    label: "Batala",
  },
  {
    value: "Bathinda",
    label: "Bathinda",
  },
  {
    value: "Begusarai",
    label: "Begusarai",
  },
  {
    value: "Belagavi",
    label: "Belagavi",
  },
  {
    value: "Bellampalle",
    label: "Bellampalle",
  },
  {
    value: "Belonia",
    label: "Belonia",
  },
  {
    value: "Bengaluru",
    label: "Bengaluru",
  },
  {
    value: "Bettiah",
    label: "Bettiah",
  },
  {
    value: "Bhaburban Agglomeration",
    label: "Bhaburban Agglomeration",
  },
  {
    value: "Bhadrachalam",
    label: "Bhadrachalam",
  },
  {
    value: "Bhadrak",
    label: "Bhadrak",
  },
  {
    value: "Bhagalpur",
    label: "Bhagalpur",
  },
  {
    value: "Bhainsa",
    label: "Bhainsa",
  },
  {
    value: "Bharatpur",
    label: "Bharatpur",
  },
  {
    value: "Bharuch",
    label: "Bharuch",
  },
  {
    value: "Bhatapara",
    label: "Bhatapara",
  },
  {
    value: "Bhavnagar",
    label: "Bhavnagar",
  },
  {
    value: "Bhawanipatna",
    label: "Bhawanipatna",
  },
  {
    value: "Bheemunipatnam",
    label: "Bheemunipatnam",
  },
  {
    value: "Bhilai Nagar",
    label: "Bhilai Nagar",
  },
  {
    value: "Bhilwara",
    label: "Bhilwara",
  },
  {
    value: "Bhimavaram",
    label: "Bhimavaram",
  },
  {
    value: "Bhiwandi",
    label: "Bhiwandi",
  },
  {
    value: "Bhiwani",
    label: "Bhiwani",
  },
  {
    value: "Bhongir",
    label: "Bhongir",
  },
  {
    value: "Bhopal",
    label: "Bhopal",
  },
  {
    value: "Bhubaneswar",
    label: "Bhubaneswar",
  },
  {
    value: "Bhuj",
    label: "Bhuj",
  },
  {
    value: "Bikaner",
    label: "Bikaner",
  },
  {
    value: "Bilaspur",
    label: "Bilaspur",
  },
  {
    value: "Bobbili",
    label: "Bobbili",
  },
  {
    value: "Bodhan",
    label: "Bodhan",
  },
  {
    value: "Bokaro Steel City",
    label: "Bokaro Steel City",
  },
  {
    value: "Bongaigaon City",
    label: "Bongaigaon City",
  },
  {
    value: "Brahmapur",
    label: "Brahmapur",
  },
  {
    value: "Buxar",
    label: "Buxar",
  },
  {
    value: "Byasanagar",
    label: "Byasanagar",
  },
  {
    value: "Chaibasa",
    label: "Chaibasa",
  },
  {
    value: "Chalakudy",
    label: "Chalakudy",
  },
  {
    value: "Chandausi",
    label: "Chandausi",
  },
  {
    value: "Chandigarh",
    label: "Chandigarh",
  },
  {
    value: "Changanassery",
    label: "Changanassery",
  },
  {
    value: "Charkhi Dadri",
    label: "Charkhi Dadri",
  },
  {
    value: "Chatra",
    label: "Chatra",
  },
  {
    value: "Chennai",
    label: "Chennai",
  },
  {
    value: "Cherthala",
    label: "Cherthala",
  },
  {
    value: "Chhapra",
    label: "Chhapra",
  },
  {
    value: "Chikkamagaluru",
    label: "Chikkamagaluru",
  },
  {
    value: "Chilakaluripet",
    label: "Chilakaluripet",
  },
  {
    value: "Chirala",
    label: "Chirala",
  },
  {
    value: "Chirkunda",
    label: "Chirkunda",
  },
  {
    value: "Chirmiri",
    label: "Chirmiri",
  },
  {
    value: "Chittoor",
    label: "Chittoor",
  },
  {
    value: "Chitturthathamangalam",
    label: "Chitturthathamangalam",
  },
  {
    value: "Coimbatore",
    label: "Coimbatore",
  },
  {
    value: "Cuttack",
    label: "Cuttack",
  },
  {
    value: "Dallirajhara",
    label: "Dallirajhara",
  },
  {
    value: "Darbhanga",
    label: "Darbhanga",
  },
  {
    value: "Darjiling",
    label: "Darjiling",
  },
  {
    value: "Davanagere",
    label: "Davanagere",
  },
  {
    value: "Deesa",
    label: "Deesa",
  },
  {
    value: "Dehradun",
    label: "Dehradun",
  },
  {
    value: "Dehrionsone",
    label: "Dehrionsone",
  },
  {
    value: "Delhi",
    label: "Delhi",
  },
  {
    value: "Deoghar",
    label: "Deoghar",
  },
  {
    value: "Dhamtari",
    label: "Dhamtari",
  },
  {
    value: "Dhanbad",
    label: "Dhanbad",
  },
  {
    value: "Dharmanagar",
    label: "Dharmanagar",
  },
  {
    value: "Dharmavaram",
    label: "Dharmavaram",
  },
  {
    value: "Dhenkanal",
    label: "Dhenkanal",
  },
  {
    value: "Dhoraji",
    label: "Dhoraji",
  },
  {
    value: "Dhubri",
    label: "Dhubri",
  },
  {
    value: "Dhule",
    label: "Dhule",
  },
  {
    value: "Dhuri",
    label: "Dhuri",
  },
  {
    value: "Dibrugarh",
    label: "Dibrugarh",
  },
  {
    value: "Dimapur",
    label: "Dimapur",
  },
  {
    value: "Diphu",
    label: "Diphu",
  },
  {
    value: "Dumka",
    label: "Dumka",
  },
  {
    value: "Dumraon",
    label: "Dumraon",
  },
  {
    value: "Durg",
    label: "Durg",
  },
  {
    value: "Eluru",
    label: "Eluru",
  },
  {
    value: "English Bazar",
    label: "English Bazar",
  },
  {
    value: "Erode",
    label: "Erode",
  },
  {
    value: "Etawah",
    label: "Etawah",
  },
  {
    value: "Faridabad",
    label: "Faridabad",
  },
  {
    value: "Faridkot",
    label: "Faridkot",
  },
  {
    value: "Farooqnagar",
    label: "Farooqnagar",
  },
  {
    value: "Fatehabad",
    label: "Fatehabad",
  },
  {
    value: "Fatehpur Sikri",
    label: "Fatehpur Sikri",
  },
  {
    value: "Fazilka",
    label: "Fazilka",
  },
  {
    value: "Firozabad",
    label: "Firozabad",
  },
  {
    value: "Firozpur",
    label: "Firozpur",
  },
  {
    value: "Firozpur Cantt",
    label: "Firozpur Cantt",
  },
  {
    value: "Forbesganj",
    label: "Forbesganj",
  },
  {
    value: "Gadwal",
    label: "Gadwal",
  },
  {
    value: "Gangarampur",
    label: "Gangarampur",
  },
  {
    value: "Ganjbasoda",
    label: "Ganjbasoda",
  },
  {
    value: "Gaya",
    label: "Gaya",
  },
  {
    value: "Giridih",
    label: "Giridih",
  },
  {
    value: "Goalpara",
    label: "Goalpara",
  },
  {
    value: "Gobichettipalayam",
    label: "Gobichettipalayam",
  },
  {
    value: "Gobindgarh",
    label: "Gobindgarh",
  },
  {
    value: "Godhra",
    label: "Godhra",
  },
  {
    value: "Gohana",
    label: "Gohana",
  },
  {
    value: "Gokak",
    label: "Gokak",
  },
  {
    value: "Gooty",
    label: "Gooty",
  },
  {
    value: "Gopalganj",
    label: "Gopalganj",
  },
  {
    value: "Gudivada",
    label: "Gudivada",
  },
  {
    value: "Gudur",
    label: "Gudur",
  },
  {
    value: "Gumia",
    label: "Gumia",
  },
  {
    value: "Guntakal",
    label: "Guntakal",
  },
  {
    value: "Guntur",
    label: "Guntur",
  },
  {
    value: "Gurdaspur",
    label: "Gurdaspur",
  },
  {
    value: "Gurgaon",
    label: "Gurgaon",
  },
  {
    value: "Guruvayoor",
    label: "Guruvayoor",
  },
  {
    value: "Guwahati",
    label: "Guwahati",
  },
  {
    value: "Gwalior",
    label: "Gwalior",
  },
  {
    value: "Habra",
    label: "Habra",
  },
  {
    value: "Hajipur",
    label: "Hajipur",
  },
  {
    value: "Haldwanicumkathgodam",
    label: "Haldwanicumkathgodam",
  },
  {
    value: "Hansi",
    label: "Hansi",
  },
  {
    value: "Hapur",
    label: "Hapur",
  },
  {
    value: "Hardoi",
    label: "Hardoi",
  },
  {
    value: "Hardwar",
    label: "Hardwar",
  },
  {
    value: "Hazaribag",
    label: "Hazaribag",
  },
  {
    value: "Hindupur",
    label: "Hindupur",
  },
  {
    value: "Hisar",
    label: "Hisar",
  },
  {
    value: "Hoshiarpur",
    label: "Hoshiarpur",
  },
  {
    value: "Hublidharwad",
    label: "Hublidharwad",
  },
  {
    value: "Huglichinsurah",
    label: "Huglichinsurah",
  },
  {
    value: "Hyderabad",
    label: "Hyderabad",
  },
  {
    value: "Ichalkaranji",
    label: "Ichalkaranji",
  },
  {
    value: "Imphal",
    label: "Imphal",
  },
  {
    value: "Indore",
    label: "Indore",
  },
  {
    value: "Itarsi",
    label: "Itarsi",
  },
  {
    value: "Jabalpur",
    label: "Jabalpur",
  },
  {
    value: "Jagdalpur",
    label: "Jagdalpur",
  },
  {
    value: "Jaggaiahpet",
    label: "Jaggaiahpet",
  },
  {
    value: "Jagraon",
    label: "Jagraon",
  },
  {
    value: "Jagtial",
    label: "Jagtial",
  },
  {
    value: "Jaipur",
    label: "Jaipur",
  },
  {
    value: "Jalandhar",
    label: "Jalandhar",
  },
  {
    value: "Jalandhar Cantt",
    label: "Jalandhar Cantt",
  },
  {
    value: "Jalpaiguri",
    label: "Jalpaiguri",
  },
  {
    value: "Jamalpur",
    label: "Jamalpur",
  },
  {
    value: "Jammalamadugu",
    label: "Jammalamadugu",
  },
  {
    value: "Jammu",
    label: "Jammu",
  },
  {
    value: "Jamnagar",
    label: "Jamnagar",
  },
  {
    value: "Jamshedpur",
    label: "Jamshedpur",
  },
  {
    value: "Jamui",
    label: "Jamui",
  },
  {
    value: "Jangaon",
    label: "Jangaon",
  },
  {
    value: "Jatani",
    label: "Jatani",
  },
  {
    value: "Jehanabad",
    label: "Jehanabad",
  },
  {
    value: "Jhansi",
    label: "Jhansi",
  },
  {
    value: "Jhargram",
    label: "Jhargram",
  },
  {
    value: "Jharsuguda",
    label: "Jharsuguda",
  },
  {
    value: "Jhumri Tilaiya",
    label: "Jhumri Tilaiya",
  },
  {
    value: "Jind",
    label: "Jind",
  },
  {
    value: "Jodhpur",
    label: "Jodhpur",
  },
  {
    value: "Jorhat",
    label: "Jorhat",
  },
  {
    value: "Kadapa",
    label: "Kadapa",
  },
  {
    value: "Kadi",
    label: "Kadi",
  },
  {
    value: "Kadiri",
    label: "Kadiri",
  },
  {
    value: "Kagaznagar",
    label: "Kagaznagar",
  },
  {
    value: "Kailasahar",
    label: "Kailasahar",
  },
  {
    value: "Kaithal",
    label: "Kaithal",
  },
  {
    value: "Kakinada",
    label: "Kakinada",
  },
  {
    value: "Kalimpong",
    label: "Kalimpong",
  },
  {
    value: "Kalpi",
    label: "Kalpi",
  },
  {
    value: "Kalyandombivali",
    label: "Kalyandombivali",
  },
  {
    value: "Kamareddy",
    label: "Kamareddy",
  },
  {
    value: "Kancheepuram",
    label: "Kancheepuram",
  },
  {
    value: "Kandukur",
    label: "Kandukur",
  },
  {
    value: "Kanhangad",
    label: "Kanhangad",
  },
  {
    value: "Kannur",
    label: "Kannur",
  },
  {
    value: "Kanpur",
    label: "Kanpur",
  },
  {
    value: "Kapadvanj",
    label: "Kapadvanj",
  },
  {
    value: "Kapurthala",
    label: "Kapurthala",
  },
  {
    value: "Karaikal",
    label: "Karaikal",
  },
  {
    value: "Karimganj",
    label: "Karimganj",
  },
  {
    value: "Karimnagar",
    label: "Karimnagar",
  },
  {
    value: "Karjat",
    label: "Karjat",
  },
  {
    value: "Karnal",
    label: "Karnal",
  },
  {
    value: "Karur",
    label: "Karur",
  },
  {
    value: "Karwar",
    label: "Karwar",
  },
  {
    value: "Kasaragod",
    label: "Kasaragod",
  },
  {
    value: "Kashipur",
    label: "Kashipur",
  },
  {
    value: "Kathurban Agglomeration",
    label: "Kathurban Agglomeration",
  },
  {
    value: "Katihar",
    label: "Katihar",
  },
  {
    value: "Kavali",
    label: "Kavali",
  },
  {
    value: "Kayamkulam",
    label: "Kayamkulam",
  },
  {
    value: "Kendrapara",
    label: "Kendrapara",
  },
  {
    value: "Kendujhar",
    label: "Kendujhar",
  },
  {
    value: "Keshod",
    label: "Keshod",
  },
  {
    value: "Khair",
    label: "Khair",
  },
  {
    value: "Khambhat",
    label: "Khambhat",
  },
  {
    value: "Khammam",
    label: "Khammam",
  },
  {
    value: "Khanna",
    label: "Khanna",
  },
  {
    value: "Kharagpur",
    label: "Kharagpur",
  },
  {
    value: "Kharar",
    label: "Kharar",
  },
  {
    value: "Khowai",
    label: "Khowai",
  },
  {
    value: "Kishanganj",
    label: "Kishanganj",
  },
  {
    value: "Kochi",
    label: "Kochi",
  },
  {
    value: "Kodungallur",
    label: "Kodungallur",
  },
  {
    value: "Kohima",
    label: "Kohima",
  },
  {
    value: "Kolar",
    label: "Kolar",
  },
  {
    value: "Kolkata",
    label: "Kolkata",
  },
  {
    value: "Kollam",
    label: "Kollam",
  },
  {
    value: "Koratla",
    label: "Koratla",
  },
  {
    value: "Korba",
    label: "Korba",
  },
  {
    value: "Kot Kapura",
    label: "Kot Kapura",
  },
  {
    value: "Kothagudem",
    label: "Kothagudem",
  },
  {
    value: "Kottayam",
    label: "Kottayam",
  },
  {
    value: "Kovvur",
    label: "Kovvur",
  },
  {
    value: "Koyilandy",
    label: "Koyilandy",
  },
  {
    value: "Kozhikode",
    label: "Kozhikode",
  },
  {
    value: "Kunnamkulam",
    label: "Kunnamkulam",
  },
  {
    value: "Kurnool",
    label: "Kurnool",
  },
  {
    value: "Kyathampalle",
    label: "Kyathampalle",
  },
  {
    value: "Lachhmangarh",
    label: "Lachhmangarh",
  },
  {
    value: "Ladnu",
    label: "Ladnu",
  },
  {
    value: "Ladwa",
    label: "Ladwa",
  },
  {
    value: "Lahar",
    label: "Lahar",
  },
  {
    value: "Laharpur",
    label: "Laharpur",
  },
  {
    value: "Lakheri",
    label: "Lakheri",
  },
  {
    value: "Lakhimpur",
    label: "Lakhimpur",
  },
  {
    value: "Lakhisarai",
    label: "Lakhisarai",
  },
  {
    value: "Lakshmeshwar",
    label: "Lakshmeshwar",
  },
  {
    value: "Lal Gopalganj Nindaura",
    label: "Lal Gopalganj Nindaura",
  },
  {
    value: "Lalganj",
    label: "Lalganj",
  },
  {
    value: "Lalgudi",
    label: "Lalgudi",
  },
  {
    value: "Lalitpur",
    label: "Lalitpur",
  },
  {
    value: "Lalsot",
    label: "Lalsot",
  },
  {
    value: "Lanka",
    label: "Lanka",
  },
  {
    value: "Lar",
    label: "Lar",
  },
  {
    value: "Lathi",
    label: "Lathi",
  },
  {
    value: "Latur",
    label: "Latur",
  },
  {
    value: "Lilong",
    label: "Lilong",
  },
  {
    value: "Limbdi",
    label: "Limbdi",
  },
  {
    value: "Lingsugur",
    label: "Lingsugur",
  },
  {
    value: "Loha",
    label: "Loha",
  },
  {
    value: "Lohardaga",
    label: "Lohardaga",
  },
  {
    value: "Lonar",
    label: "Lonar",
  },
  {
    value: "Lonavla",
    label: "Lonavla",
  },
  {
    value: "Longowal",
    label: "Longowal",
  },
  {
    value: "Loni",
    label: "Loni",
  },
  {
    value: "Losal",
    label: "Losal",
  },
  {
    value: "Lucknow",
    label: "Lucknow",
  },
  {
    value: "Ludhiana",
    label: "Ludhiana",
  },
  {
    value: "Lumding",
    label: "Lumding",
  },
  {
    value: "Lunawada",
    label: "Lunawada",
  },
  {
    value: "Lunglei",
    label: "Lunglei",
  },
  {
    value: "Macherla",
    label: "Macherla",
  },
  {
    value: "Machilipatnam",
    label: "Machilipatnam",
  },
  {
    value: "Madanapalle",
    label: "Madanapalle",
  },
  {
    value: "Maddur",
    label: "Maddur",
  },
  {
    value: "Madhepura",
    label: "Madhepura",
  },
  {
    value: "Madhubani",
    label: "Madhubani",
  },
  {
    value: "Madhugiri",
    label: "Madhugiri",
  },
  {
    value: "Madhupur",
    label: "Madhupur",
  },
  {
    value: "Madikeri",
    label: "Madikeri",
  },
  {
    value: "Madurai",
    label: "Madurai",
  },
  {
    value: "Magadi",
    label: "Magadi",
  },
  {
    value: "Mahad",
    label: "Mahad",
  },
  {
    value: "Mahalingapura",
    label: "Mahalingapura",
  },
  {
    value: "Maharajganj",
    label: "Maharajganj",
  },
  {
    value: "Maharajpur",
    label: "Maharajpur",
  },
  {
    value: "Mahasamund",
    label: "Mahasamund",
  },
  {
    value: "Mahbubnagar",
    label: "Mahbubnagar",
  },
  {
    value: "Mahe",
    label: "Mahe",
  },
  {
    value: "Mahemdabad",
    label: "Mahemdabad",
  },
  {
    value: "Mahendragarh",
    label: "Mahendragarh",
  },
  {
    value: "Mahesana",
    label: "Mahesana",
  },
  {
    value: "Mahidpur",
    label: "Mahidpur",
  },
  {
    value: "Mahnar Bazar",
    label: "Mahnar Bazar",
  },
  {
    value: "Mahuva",
    label: "Mahuva",
  },
  {
    value: "Maihar",
    label: "Maihar",
  },
  {
    value: "Mainaguri",
    label: "Mainaguri",
  },
  {
    value: "Makhdumpur",
    label: "Makhdumpur",
  },
  {
    value: "Makrana",
    label: "Makrana",
  },
  {
    value: "Malaj Khand",
    label: "Malaj Khand",
  },
  {
    value: "Malappuram",
    label: "Malappuram",
  },
  {
    value: "Malavalli",
    label: "Malavalli",
  },
  {
    value: "Malda",
    label: "Malda",
  },
  {
    value: "Malegaon",
    label: "Malegaon",
  },
  {
    value: "Malerkotla",
    label: "Malerkotla",
  },
  {
    value: "Malkangiri",
    label: "Malkangiri",
  },
  {
    value: "Malkapur",
    label: "Malkapur",
  },
  {
    value: "Malout",
    label: "Malout",
  },
  {
    value: "Malpura",
    label: "Malpura",
  },
  {
    value: "Malur",
    label: "Malur",
  },
  {
    value: "Manachanallur",
    label: "Manachanallur",
  },
  {
    value: "Manasa",
    label: "Manasa",
  },
  {
    value: "Manavadar",
    label: "Manavadar",
  },
  {
    value: "Manawar",
    label: "Manawar",
  },
  {
    value: "Mancherial",
    label: "Mancherial",
  },
  {
    value: "Mandalgarh",
    label: "Mandalgarh",
  },
  {
    value: "Mandamarri",
    label: "Mandamarri",
  },
  {
    value: "Mandapeta",
    label: "Mandapeta",
  },
  {
    value: "Mandawa",
    label: "Mandawa",
  },
  {
    value: "Mandi",
    label: "Mandi",
  },
  {
    value: "Mandi Dabwali",
    label: "Mandi Dabwali",
  },
  {
    value: "Mandideep",
    label: "Mandideep",
  },
  {
    value: "Mandla",
    label: "Mandla",
  },
  {
    value: "Mandsaur",
    label: "Mandsaur",
  },
  {
    value: "Mandvi",
    label: "Mandvi",
  },
  {
    value: "Mandya",
    label: "Mandya",
  },
  {
    value: "Manendragarh",
    label: "Manendragarh",
  },
  {
    value: "Maner",
    label: "Maner",
  },
  {
    value: "Mangaldoi",
    label: "Mangaldoi",
  },
  {
    value: "Mangaluru",
    label: "Mangaluru",
  },
  {
    value: "Mangalvedhe",
    label: "Mangalvedhe",
  },
  {
    value: "Manglaur",
    label: "Manglaur",
  },
  {
    value: "Mangrol",
    label: "Mangrol",
  },
  {
    value: "Mangrulpir",
    label: "Mangrulpir",
  },
  {
    value: "Manihari",
    label: "Manihari",
  },
  {
    value: "Manjlegaon",
    label: "Manjlegaon",
  },
  {
    value: "Mankachar",
    label: "Mankachar",
  },
  {
    value: "Manmad",
    label: "Manmad",
  },
  {
    value: "Mansa",
    label: "Mansa",
  },
  {
    value: "Manuguru",
    label: "Manuguru",
  },
  {
    value: "Manvi",
    label: "Manvi",
  },
  {
    value: "Manwath",
    label: "Manwath",
  },
  {
    value: "Mapusa",
    label: "Mapusa",
  },
  {
    value: "Margao",
    label: "Margao",
  },
  {
    value: "Margherita",
    label: "Margherita",
  },
  {
    value: "Marhaura",
    label: "Marhaura",
  },
  {
    value: "Mariani",
    label: "Mariani",
  },
  {
    value: "Marigaon",
    label: "Marigaon",
  },
  {
    value: "Markapur",
    label: "Markapur",
  },
  {
    value: "Marmagao",
    label: "Marmagao",
  },
  {
    value: "Masaurhi",
    label: "Masaurhi",
  },
  {
    value: "Mathabhanga",
    label: "Mathabhanga",
  },
  {
    value: "Mathura",
    label: "Mathura",
  },
  {
    value: "Mattannur",
    label: "Mattannur",
  },
  {
    value: "Mauganj",
    label: "Mauganj",
  },
  {
    value: "Mavelikkara",
    label: "Mavelikkara",
  },
  {
    value: "Mavoor",
    label: "Mavoor",
  },
  {
    value: "Mayang Imphal",
    label: "Mayang Imphal",
  },
  {
    value: "Medak",
    label: "Medak",
  },
  {
    value: "Medininagar Daltonganj",
    label: "Medininagar Daltonganj",
  },
  {
    value: "Medinipur",
    label: "Medinipur",
  },
  {
    value: "Meerut",
    label: "Meerut",
  },
  {
    value: "Mehkar",
    label: "Mehkar",
  },
  {
    value: "Memari",
    label: "Memari",
  },
  {
    value: "Merta City",
    label: "Merta City",
  },
  {
    value: "Mhaswad",
    label: "Mhaswad",
  },
  {
    value: "Mhow Cantonment",
    label: "Mhow Cantonment",
  },
  {
    value: "Mhowgaon",
    label: "Mhowgaon",
  },
  {
    value: "Mihijam",
    label: "Mihijam",
  },
  {
    value: "Mirabhayandar",
    label: "Mirabhayandar",
  },
  {
    value: "Mirganj",
    label: "Mirganj",
  },
  {
    value: "Miryalaguda",
    label: "Miryalaguda",
  },
  {
    value: "Modasa",
    label: "Modasa",
  },
  {
    value: "Modinagar",
    label: "Modinagar",
  },
  {
    value: "Moga",
    label: "Moga",
  },
  {
    value: "Mohali",
    label: "Mohali",
  },
  {
    value: "Mokameh",
    label: "Mokameh",
  },
  {
    value: "Mokokchung",
    label: "Mokokchung",
  },
  {
    value: "Monoharpur",
    label: "Monoharpur",
  },
  {
    value: "Moradabad",
    label: "Moradabad",
  },
  {
    value: "Morena",
    label: "Morena",
  },
  {
    value: "Morinda India",
    label: "Morinda India",
  },
  {
    value: "Morshi",
    label: "Morshi",
  },
  {
    value: "Morvi",
    label: "Morvi",
  },
  {
    value: "Motihari",
    label: "Motihari",
  },
  {
    value: "Motipur",
    label: "Motipur",
  },
  {
    value: "Mount Abu",
    label: "Mount Abu",
  },
  {
    value: "Mudabidri",
    label: "Mudabidri",
  },
  {
    value: "Mudalagi",
    label: "Mudalagi",
  },
  {
    value: "Muddebihal",
    label: "Muddebihal",
  },
  {
    value: "Mudhol",
    label: "Mudhol",
  },
  {
    value: "Mukerian",
    label: "Mukerian",
  },
  {
    value: "Mukhed",
    label: "Mukhed",
  },
  {
    value: "Muktsar",
    label: "Muktsar",
  },
  {
    value: "Mul",
    label: "Mul",
  },
  {
    value: "Mulbagal",
    label: "Mulbagal",
  },
  {
    value: "Multai",
    label: "Multai",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
  {
    value: "Mundargi",
    label: "Mundargi",
  },
  {
    value: "Mundi",
    label: "Mundi",
  },
  {
    value: "Mungeli",
    label: "Mungeli",
  },
  {
    value: "Munger",
    label: "Munger",
  },
  {
    value: "Murliganj",
    label: "Murliganj",
  },
  {
    value: "Murshidabad",
    label: "Murshidabad",
  },
  {
    value: "Murtijapur",
    label: "Murtijapur",
  },
  {
    value: "Murwara Katni",
    label: "Murwara Katni",
  },
  {
    value: "Musabani",
    label: "Musabani",
  },
  {
    value: "Mussoorie",
    label: "Mussoorie",
  },
  {
    value: "Muvattupuzha",
    label: "Muvattupuzha",
  },
  {
    value: "Muzaffarpur",
    label: "Muzaffarpur",
  },
  {
    value: "Mysore",
    label: "Mysore",
  },
  {
    value: "Nabadwip",
    label: "Nabadwip",
  },
  {
    value: "Nabarangapur",
    label: "Nabarangapur",
  },
  {
    value: "Nabha",
    label: "Nabha",
  },
  {
    value: "Nadbai",
    label: "Nadbai",
  },
  {
    value: "Nadiad",
    label: "Nadiad",
  },
  {
    value: "Nagaon",
    label: "Nagaon",
  },
  {
    value: "Nagapattinam",
    label: "Nagapattinam",
  },
  {
    value: "Nagar",
    label: "Nagar",
  },
  {
    value: "Nagari",
    label: "Nagari",
  },
  {
    value: "Nagarkurnool",
    label: "Nagarkurnool",
  },
  {
    value: "Nagaur",
    label: "Nagaur",
  },
  {
    value: "Nagda",
    label: "Nagda",
  },
  {
    value: "Nagercoil",
    label: "Nagercoil",
  },
  {
    value: "Nagina",
    label: "Nagina",
  },
  {
    value: "Nagla",
    label: "Nagla",
  },
  {
    value: "Nagpur",
    label: "Nagpur",
  },
  {
    value: "Nahan",
    label: "Nahan",
  },
  {
    value: "Naharlagun",
    label: "Naharlagun",
  },
  {
    value: "Naidupet",
    label: "Naidupet",
  },
  {
    value: "Naihati",
    label: "Naihati",
  },
  {
    value: "Naila Janjgir",
    label: "Naila Janjgir",
  },
  {
    value: "Nainital",
    label: "Nainital",
  },
  {
    value: "Nainpur",
    label: "Nainpur",
  },
  {
    value: "Najibabad",
    label: "Najibabad",
  },
  {
    value: "Nakodar",
    label: "Nakodar",
  },
  {
    value: "Nakur",
    label: "Nakur",
  },
  {
    value: "Nalbari",
    label: "Nalbari",
  },
  {
    value: "Namagiripettai",
    label: "Namagiripettai",
  },
  {
    value: "Namakkal",
    label: "Namakkal",
  },
  {
    value: "Nandedwaghala",
    label: "Nandedwaghala",
  },
  {
    value: "Nandgaon",
    label: "Nandgaon",
  },
  {
    value: "Nandivaramguduvancheri",
    label: "Nandivaramguduvancheri",
  },
  {
    value: "Nandura",
    label: "Nandura",
  },
  {
    value: "Nandurbar",
    label: "Nandurbar",
  },
  {
    value: "Nandyal",
    label: "Nandyal",
  },
  {
    value: "Nangal",
    label: "Nangal",
  },
  {
    value: "Nanjangud",
    label: "Nanjangud",
  },
  {
    value: "Nanjikottai",
    label: "Nanjikottai",
  },
  {
    value: "Nanpara",
    label: "Nanpara",
  },
  {
    value: "Narasapuram",
    label: "Narasapuram",
  },
  {
    value: "Narasaraopet",
    label: "Narasaraopet",
  },
  {
    value: "Naraura",
    label: "Naraura",
  },
  {
    value: "Narayanpet",
    label: "Narayanpet",
  },
  {
    value: "Nargund",
    label: "Nargund",
  },
  {
    value: "Narkatiaganj",
    label: "Narkatiaganj",
  },
  {
    value: "Narkhed",
    label: "Narkhed",
  },
  {
    value: "Narnaul",
    label: "Narnaul",
  },
  {
    value: "Narsinghgarh",
    label: "Narsinghgarh",
  },
  {
    value: "Narsipatnam",
    label: "Narsipatnam",
  },
  {
    value: "Narwana",
    label: "Narwana",
  },
  {
    value: "Nashik",
    label: "Nashik",
  },
  {
    value: "Nasirabad",
    label: "Nasirabad",
  },
  {
    value: "Natham",
    label: "Natham",
  },
  {
    value: "Nathdwara",
    label: "Nathdwara",
  },
  {
    value: "Naugachhia",
    label: "Naugachhia",
  },
  {
    value: "Naugawan Sadat",
    label: "Naugawan Sadat",
  },
  {
    value: "Nautanwa",
    label: "Nautanwa",
  },
  {
    value: "Navalgund",
    label: "Navalgund",
  },
  {
    value: "Navsari",
    label: "Navsari",
  },
  {
    value: "Nawabganj",
    label: "Nawabganj",
  },
  {
    value: "Nawada",
    label: "Nawada",
  },
  {
    value: "Nawanshahr",
    label: "Nawanshahr",
  },
  {
    value: "Nawapur",
    label: "Nawapur",
  },
  {
    value: "Nedumangad",
    label: "Nedumangad",
  },
  {
    value: "Neemkathana",
    label: "Neemkathana",
  },
  {
    value: "Neemuch",
    label: "Neemuch",
  },
  {
    value: "Nehtaur",
    label: "Nehtaur",
  },
  {
    value: "Nelamangala",
    label: "Nelamangala",
  },
  {
    value: "Nellikuppam",
    label: "Nellikuppam",
  },
  {
    value: "Nellore",
    label: "Nellore",
  },
  {
    value: "Nepanagar",
    label: "Nepanagar",
  },
  {
    value: "New Delhi",
    label: "New Delhi",
  },
  {
    value: "Neyveli Ts",
    label: "Neyveli Ts",
  },
  {
    value: "Neyyattinkara",
    label: "Neyyattinkara",
  },
  {
    value: "Nidadavole",
    label: "Nidadavole",
  },
  {
    value: "Nilambur",
    label: "Nilambur",
  },
  {
    value: "Nilanga",
    label: "Nilanga",
  },
  {
    value: "Nimbahera",
    label: "Nimbahera",
  },
  {
    value: "Nirmal",
    label: "Nirmal",
  },
  {
    value: "Niwai",
    label: "Niwai",
  },
  {
    value: "Niwari",
    label: "Niwari",
  },
  {
    value: "Nizamabad",
    label: "Nizamabad",
  },
  {
    value: "Nohar",
    label: "Nohar",
  },
  {
    value: "Noida",
    label: "Noida",
  },
  {
    value: "Nokha",
    label: "Nokha",
  },
  {
    value: "Nongstoin",
    label: "Nongstoin",
  },
  {
    value: "Noorpur",
    label: "Noorpur",
  },
  {
    value: "North Lakhimpur",
    label: "North Lakhimpur",
  },
  {
    value: "Nowgong",
    label: "Nowgong",
  },
  {
    value: "Nowrozabad Khodargama",
    label: "Nowrozabad Khodargama",
  },
  {
    value: "Nuzvid",
    label: "Nuzvid",
  },
  {
    value: "O Valley",
    label: "O Valley",
  },
  {
    value: "Obra",
    label: "Obra",
  },
  {
    value: "Oddanchatram",
    label: "Oddanchatram",
  },
  {
    value: "Ongole",
    label: "Ongole",
  },
  {
    value: "Orai",
    label: "Orai",
  },
  {
    value: "Osmanabad",
    label: "Osmanabad",
  },
  {
    value: "Ottappalam",
    label: "Ottappalam",
  },
  {
    value: "Ozar",
    label: "Ozar",
  },
  {
    value: "Pnpatti",
    label: "Pnpatti",
  },
  {
    value: "Pachora",
    label: "Pachora",
  },
  {
    value: "Pachore",
    label: "Pachore",
  },
  {
    value: "Pacode",
    label: "Pacode",
  },
  {
    value: "Padmanabhapuram",
    label: "Padmanabhapuram",
  },
  {
    value: "Padra",
    label: "Padra",
  },
  {
    value: "Padrauna",
    label: "Padrauna",
  },
  {
    value: "Paithan",
    label: "Paithan",
  },
  {
    value: "Pakaur",
    label: "Pakaur",
  },
  {
    value: "Palacole",
    label: "Palacole",
  },
  {
    value: "Palai",
    label: "Palai",
  },
  {
    value: "Palakkad",
    label: "Palakkad",
  },
  {
    value: "Palampur",
    label: "Palampur",
  },
  {
    value: "Palani",
    label: "Palani",
  },
  {
    value: "Palanpur",
    label: "Palanpur",
  },
  {
    value: "Palasa Kasibugga",
    label: "Palasa Kasibugga",
  },
  {
    value: "Palghar",
    label: "Palghar",
  },
  {
    value: "Pali",
    label: "Pali",
  },
  {
    value: "Palia Kalan",
    label: "Palia Kalan",
  },
  {
    value: "Palitana",
    label: "Palitana",
  },
  {
    value: "Palladam",
    label: "Palladam",
  },
  {
    value: "Pallapatti",
    label: "Pallapatti",
  },
  {
    value: "Pallikonda",
    label: "Pallikonda",
  },
  {
    value: "Palwal",
    label: "Palwal",
  },
  {
    value: "Palwancha",
    label: "Palwancha",
  },
  {
    value: "Panagar",
    label: "Panagar",
  },
  {
    value: "Panagudi",
    label: "Panagudi",
  },
  {
    value: "Panaji",
    label: "Panaji",
  },
  {
    value: "Panamattom",
    label: "Panamattom",
  },
  {
    value: "Panchkula",
    label: "Panchkula",
  },
  {
    value: "Panchla",
    label: "Panchla",
  },
  {
    value: "Pandurban Agglomeration",
    label: "Pandurban Agglomeration",
  },
  {
    value: "Pandharkaoda",
    label: "Pandharkaoda",
  },
  {
    value: "Pandharpur",
    label: "Pandharpur",
  },
  {
    value: "Pandhurna",
    label: "Pandhurna",
  },
  {
    value: "Panipat",
    label: "Panipat",
  },
  {
    value: "Panna",
    label: "Panna",
  },
  {
    value: "Panniyannur",
    label: "Panniyannur",
  },
  {
    value: "Panruti",
    label: "Panruti",
  },
  {
    value: "Panvel",
    label: "Panvel",
  },
  {
    value: "Pappinisseri",
    label: "Pappinisseri",
  },
  {
    value: "Paradip",
    label: "Paradip",
  },
  {
    value: "Paramakudi",
    label: "Paramakudi",
  },
  {
    value: "Parangipettai",
    label: "Parangipettai",
  },
  {
    value: "Parasi",
    label: "Parasi",
  },
  {
    value: "Paravoor",
    label: "Paravoor",
  },
  {
    value: "Parbhani",
    label: "Parbhani",
  },
  {
    value: "Pardi",
    label: "Pardi",
  },
  {
    value: "Parlakhemundi",
    label: "Parlakhemundi",
  },
  {
    value: "Parli",
    label: "Parli",
  },
  {
    value: "Partur",
    label: "Partur",
  },
  {
    value: "Parvathipuram",
    label: "Parvathipuram",
  },
  {
    value: "Pasan",
    label: "Pasan",
  },
  {
    value: "Paschim Punropara",
    label: "Paschim Punropara",
  },
  {
    value: "Pasighat",
    label: "Pasighat",
  },
  {
    value: "Patan",
    label: "Patan",
  },
  {
    value: "Pathanamthitta",
    label: "Pathanamthitta",
  },
  {
    value: "Pathankot",
    label: "Pathankot",
  },
  {
    value: "Pathardi",
    label: "Pathardi",
  },
  {
    value: "Pathri",
    label: "Pathri",
  },
  {
    value: "Patiala",
    label: "Patiala",
  },
  {
    value: "Patna",
    label: "Patna",
  },
  {
    value: "Patratu",
    label: "Patratu",
  },
  {
    value: "Pattamundai",
    label: "Pattamundai",
  },
  {
    value: "Patti",
    label: "Patti",
  },
  {
    value: "Pattran",
    label: "Pattran",
  },
  {
    value: "Pattukkottai",
    label: "Pattukkottai",
  },
  {
    value: "Patur",
    label: "Patur",
  },
  {
    value: "Pauni",
    label: "Pauni",
  },
  {
    value: "Pauri",
    label: "Pauri",
  },
  {
    value: "Pavagada",
    label: "Pavagada",
  },
  {
    value: "Pedana",
    label: "Pedana",
  },
  {
    value: "Peddapuram",
    label: "Peddapuram",
  },
  {
    value: "Pehowa",
    label: "Pehowa",
  },
  {
    value: "Pen",
    label: "Pen",
  },
  {
    value: "Perambalur",
    label: "Perambalur",
  },
  {
    value: "Peravurani",
    label: "Peravurani",
  },
  {
    value: "Peringathur",
    label: "Peringathur",
  },
  {
    value: "Perinthalmanna",
    label: "Perinthalmanna",
  },
  {
    value: "Periyakulam",
    label: "Periyakulam",
  },
  {
    value: "Periyasemur",
    label: "Periyasemur",
  },
  {
    value: "Pernampattu",
    label: "Pernampattu",
  },
  {
    value: "Perumbavoor",
    label: "Perumbavoor",
  },
  {
    value: "Petlad",
    label: "Petlad",
  },
  {
    value: "Phagwara",
    label: "Phagwara",
  },
  {
    value: "Phalodi",
    label: "Phalodi",
  },
  {
    value: "Phaltan",
    label: "Phaltan",
  },
  {
    value: "Phillaur",
    label: "Phillaur",
  },
  {
    value: "Phulabani",
    label: "Phulabani",
  },
  {
    value: "Phulera",
    label: "Phulera",
  },
  {
    value: "Phulpur",
    label: "Phulpur",
  },
  {
    value: "Phusro",
    label: "Phusro",
  },
  {
    value: "Pihani",
    label: "Pihani",
  },
  {
    value: "Pilani",
    label: "Pilani",
  },
  {
    value: "Pilibanga",
    label: "Pilibanga",
  },
  {
    value: "Pilibhit",
    label: "Pilibhit",
  },
  {
    value: "Pilkhuwa",
    label: "Pilkhuwa",
  },
  {
    value: "Pindwara",
    label: "Pindwara",
  },
  {
    value: "Pinjore",
    label: "Pinjore",
  },
  {
    value: "Pipar City",
    label: "Pipar City",
  },
  {
    value: "Pipariya",
    label: "Pipariya",
  },
  {
    value: "Piriyapatna",
    label: "Piriyapatna",
  },
  {
    value: "Piro",
    label: "Piro",
  },
  {
    value: "Pithampur",
    label: "Pithampur",
  },
  {
    value: "Pithapuram",
    label: "Pithapuram",
  },
  {
    value: "Pithoragarh",
    label: "Pithoragarh",
  },
  {
    value: "Pollachi",
    label: "Pollachi",
  },
  {
    value: "Polur",
    label: "Polur",
  },
  {
    value: "Pondicherry",
    label: "Pondicherry",
  },
  {
    value: "Ponnani",
    label: "Ponnani",
  },
  {
    value: "Ponneri",
    label: "Ponneri",
  },
  {
    value: "Ponnur",
    label: "Ponnur",
  },
  {
    value: "Porbandar",
    label: "Porbandar",
  },
  {
    value: "Porsa",
    label: "Porsa",
  },
  {
    value: "Port Blair",
    label: "Port Blair",
  },
  {
    value: "Powayan",
    label: "Powayan",
  },
  {
    value: "Prantij",
    label: "Prantij",
  },
  {
    value: "Pratapgarh",
    label: "Pratapgarh",
  },
  {
    value: "Prithvipur",
    label: "Prithvipur",
  },
  {
    value: "Proddatur",
    label: "Proddatur",
  },
  {
    value: "Pudukkottai",
    label: "Pudukkottai",
  },
  {
    value: "Pudupattinam",
    label: "Pudupattinam",
  },
  {
    value: "Pukhrayan",
    label: "Pukhrayan",
  },
  {
    value: "Pulgaon",
    label: "Pulgaon",
  },
  {
    value: "Puliyankudi",
    label: "Puliyankudi",
  },
  {
    value: "Punalur",
    label: "Punalur",
  },
  {
    value: "Punch",
    label: "Punch",
  },
  {
    value: "Pune",
    label: "Pune",
  },
  {
    value: "Punganur",
    label: "Punganur",
  },
  {
    value: "Punjaipugalur",
    label: "Punjaipugalur",
  },
  {
    value: "Puranpur",
    label: "Puranpur",
  },
  {
    value: "Puri",
    label: "Puri",
  },
  {
    value: "Purna",
    label: "Purna",
  },
  {
    value: "Purnia",
    label: "Purnia",
  },
  {
    value: "Purqurban Agglomerationzi",
    label: "Purqurban Agglomerationzi",
  },
  {
    value: "Purulia",
    label: "Purulia",
  },
  {
    value: "Purwa",
    label: "Purwa",
  },
  {
    value: "Pusad",
    label: "Pusad",
  },
  {
    value: "Puthuppally",
    label: "Puthuppally",
  },
  {
    value: "Puttur",
    label: "Puttur",
  },
  {
    value: "Qadian",
    label: "Qadian",
  },
  {
    value: "Raayachuru",
    label: "Raayachuru",
  },
  {
    value: "Rabkavi Banhatti",
    label: "Rabkavi Banhatti",
  },
  {
    value: "Radhanpur",
    label: "Radhanpur",
  },
  {
    value: "Rae Bareli",
    label: "Rae Bareli",
  },
  {
    value: "Rafiganj",
    label: "Rafiganj",
  },
  {
    value: "Raghogarhvijaypur",
    label: "Raghogarhvijaypur",
  },
  {
    value: "Raghunathganj",
    label: "Raghunathganj",
  },
  {
    value: "Raghunathpur",
    label: "Raghunathpur",
  },
  {
    value: "Rahatgarh",
    label: "Rahatgarh",
  },
  {
    value: "Rahuri",
    label: "Rahuri",
  },
  {
    value: "Raiganj",
    label: "Raiganj",
  },
  {
    value: "Raigarh",
    label: "Raigarh",
  },
  {
    value: "Raikot",
    label: "Raikot",
  },
  {
    value: "Raipur",
    label: "Raipur",
  },
  {
    value: "Rairangpur",
    label: "Rairangpur",
  },
  {
    value: "Raisen",
    label: "Raisen",
  },
  {
    value: "Raisinghnagar",
    label: "Raisinghnagar",
  },
  {
    value: "Rajagangapur",
    label: "Rajagangapur",
  },
  {
    value: "Rajahmundry",
    label: "Rajahmundry",
  },
  {
    value: "Rajakhera",
    label: "Rajakhera",
  },
  {
    value: "Rajaldesar",
    label: "Rajaldesar",
  },
  {
    value: "Rajam",
    label: "Rajam",
  },
  {
    value: "Rajampet",
    label: "Rajampet",
  },
  {
    value: "Rajapalayam",
    label: "Rajapalayam",
  },
  {
    value: "Rajauri",
    label: "Rajauri",
  },
  {
    value: "Rajgarh",
    label: "Rajgarh",
  },
  {
    value: "Rajgarh Alwar",
    label: "Rajgarh Alwar",
  },
  {
    value: "Rajgarh Churu",
    label: "Rajgarh Churu",
  },
  {
    value: "Rajgir",
    label: "Rajgir",
  },
  {
    value: "Rajkot",
    label: "Rajkot",
  },
  {
    value: "Rajnandgaon",
    label: "Rajnandgaon",
  },
  {
    value: "Rajpipla",
    label: "Rajpipla",
  },
  {
    value: "Rajpura",
    label: "Rajpura",
  },
  {
    value: "Rajsamand",
    label: "Rajsamand",
  },
  {
    value: "Rajula",
    label: "Rajula",
  },
  {
    value: "Rajura",
    label: "Rajura",
  },
  {
    value: "Ramachandrapuram",
    label: "Ramachandrapuram",
  },
  {
    value: "Ramagundam",
    label: "Ramagundam",
  },
  {
    value: "Ramanagaram",
    label: "Ramanagaram",
  },
  {
    value: "Ramanathapuram",
    label: "Ramanathapuram",
  },
  {
    value: "Ramdurg",
    label: "Ramdurg",
  },
  {
    value: "Rameshwaram",
    label: "Rameshwaram",
  },
  {
    value: "Ramganj Mandi",
    label: "Ramganj Mandi",
  },
  {
    value: "Ramgarh",
    label: "Ramgarh",
  },
  {
    value: "Ramnagar",
    label: "Ramnagar",
  },
  {
    value: "Ramngarh",
    label: "Ramngarh",
  },
  {
    value: "Rampur",
    label: "Rampur",
  },
  {
    value: "Rampur Maniharan",
    label: "Rampur Maniharan",
  },
  {
    value: "Rampura Phul",
    label: "Rampura Phul",
  },
  {
    value: "Rampurhat",
    label: "Rampurhat",
  },
  {
    value: "Ramtek",
    label: "Ramtek",
  },
  {
    value: "Ranaghat",
    label: "Ranaghat",
  },
  {
    value: "Ranavav",
    label: "Ranavav",
  },
  {
    value: "Ranchi",
    label: "Ranchi",
  },
  {
    value: "Ranebennuru",
    label: "Ranebennuru",
  },
  {
    value: "Rangia",
    label: "Rangia",
  },
  {
    value: "Rania",
    label: "Rania",
  },
  {
    value: "Ranibennur",
    label: "Ranibennur",
  },
  {
    value: "Ranipet",
    label: "Ranipet",
  },
  {
    value: "Rapar",
    label: "Rapar",
  },
  {
    value: "Rasipuram",
    label: "Rasipuram",
  },
  {
    value: "Rasra",
    label: "Rasra",
  },
  {
    value: "Ratangarh",
    label: "Ratangarh",
  },
  {
    value: "Rath",
    label: "Rath",
  },
  {
    value: "Ratia",
    label: "Ratia",
  },
  {
    value: "Ratlam",
    label: "Ratlam",
  },
  {
    value: "Ratnagiri",
    label: "Ratnagiri",
  },
  {
    value: "Rau",
    label: "Rau",
  },
  {
    value: "Raurkela",
    label: "Raurkela",
  },
  {
    value: "Raver",
    label: "Raver",
  },
  {
    value: "Rawatbhata",
    label: "Rawatbhata",
  },
  {
    value: "Rawatsar",
    label: "Rawatsar",
  },
  {
    value: "Raxaul Bazar",
    label: "Raxaul Bazar",
  },
  {
    value: "Rayachoti",
    label: "Rayachoti",
  },
  {
    value: "Rayadurg",
    label: "Rayadurg",
  },
  {
    value: "Rayagada",
    label: "Rayagada",
  },
  {
    value: "Reengus",
    label: "Reengus",
  },
  {
    value: "Rehli",
    label: "Rehli",
  },
  {
    value: "Renigunta",
    label: "Renigunta",
  },
  {
    value: "Renukoot",
    label: "Renukoot",
  },
  {
    value: "Reoti",
    label: "Reoti",
  },
  {
    value: "Repalle",
    label: "Repalle",
  },
  {
    value: "Revelganj",
    label: "Revelganj",
  },
  {
    value: "Rewa",
    label: "Rewa",
  },
  {
    value: "Rewari",
    label: "Rewari",
  },
  {
    value: "Rishikesh",
    label: "Rishikesh",
  },
  {
    value: "Risod",
    label: "Risod",
  },
  {
    value: "Robertsganj",
    label: "Robertsganj",
  },
  {
    value: "Robertson Pet",
    label: "Robertson Pet",
  },
  {
    value: "Rohtak",
    label: "Rohtak",
  },
  {
    value: "Ron",
    label: "Ron",
  },
  {
    value: "Roorkee",
    label: "Roorkee",
  },
  {
    value: "Rosera",
    label: "Rosera",
  },
  {
    value: "Rudauli",
    label: "Rudauli",
  },
  {
    value: "Rudrapur",
    label: "Rudrapur",
  },
  {
    value: "Rupnagar",
    label: "Rupnagar",
  },
  {
    value: "Surban Agglomerationr",
    label: "Surban Agglomerationr",
  },
  {
    value: "Sabalgarh",
    label: "Sabalgarh",
  },
  {
    value: "Sadabad",
    label: "Sadabad",
  },
  {
    value: "Sadalagi",
    label: "Sadalagi",
  },
  {
    value: "Sadasivpet",
    label: "Sadasivpet",
  },
  {
    value: "Sadri",
    label: "Sadri",
  },
  {
    value: "Sadulpur",
    label: "Sadulpur",
  },
  {
    value: "Sadulshahar",
    label: "Sadulshahar",
  },
  {
    value: "Safidon",
    label: "Safidon",
  },
  {
    value: "Safipur",
    label: "Safipur",
  },
  {
    value: "Sagar",
    label: "Sagar",
  },
  {
    value: "Sagara",
    label: "Sagara",
  },
  {
    value: "Sagwara",
    label: "Sagwara",
  },
  {
    value: "Saharanpur",
    label: "Saharanpur",
  },
  {
    value: "Saharsa",
    label: "Saharsa",
  },
  {
    value: "Sahaspur",
    label: "Sahaspur",
  },
  {
    value: "Sahaswan",
    label: "Sahaswan",
  },
  {
    value: "Sahawar",
    label: "Sahawar",
  },
  {
    value: "Sahibganj",
    label: "Sahibganj",
  },
  {
    value: "Sahjanwa",
    label: "Sahjanwa",
  },
  {
    value: "Saidpur",
    label: "Saidpur",
  },
  {
    value: "Saiha",
    label: "Saiha",
  },
  {
    value: "Sailu",
    label: "Sailu",
  },
  {
    value: "Sainthia",
    label: "Sainthia",
  },
  {
    value: "Sakaleshapura",
    label: "Sakaleshapura",
  },
  {
    value: "Sakti",
    label: "Sakti",
  },
  {
    value: "Salaya",
    label: "Salaya",
  },
  {
    value: "Salem",
    label: "Salem",
  },
  {
    value: "Salur",
    label: "Salur",
  },
  {
    value: "Samalkha",
    label: "Samalkha",
  },
  {
    value: "Samalkot",
    label: "Samalkot",
  },
  {
    value: "Samana",
    label: "Samana",
  },
  {
    value: "Samastipur",
    label: "Samastipur",
  },
  {
    value: "Sambalpur",
    label: "Sambalpur",
  },
  {
    value: "Sambhal",
    label: "Sambhal",
  },
  {
    value: "Sambhar",
    label: "Sambhar",
  },
  {
    value: "Samdhan",
    label: "Samdhan",
  },
  {
    value: "Samthar",
    label: "Samthar",
  },
  {
    value: "Sanand",
    label: "Sanand",
  },
  {
    value: "Sanawad",
    label: "Sanawad",
  },
  {
    value: "Sanchore",
    label: "Sanchore",
  },
  {
    value: "Sandi",
    label: "Sandi",
  },
  {
    value: "Sandila",
    label: "Sandila",
  },
  {
    value: "Sanduru",
    label: "Sanduru",
  },
  {
    value: "Sangamner",
    label: "Sangamner",
  },
  {
    value: "Sangareddy",
    label: "Sangareddy",
  },
  {
    value: "Sangaria",
    label: "Sangaria",
  },
  {
    value: "Sangli",
    label: "Sangli",
  },
  {
    value: "Sangole",
    label: "Sangole",
  },
  {
    value: "Sangrur",
    label: "Sangrur",
  },
  {
    value: "Sankarankovil",
    label: "Sankarankovil",
  },
  {
    value: "Sankari",
    label: "Sankari",
  },
  {
    value: "Sankeshwara",
    label: "Sankeshwara",
  },
  {
    value: "Santipur",
    label: "Santipur",
  },
  {
    value: "Sarangpur",
    label: "Sarangpur",
  },
  {
    value: "Sardarshahar",
    label: "Sardarshahar",
  },
  {
    value: "Sardhana",
    label: "Sardhana",
  },
  {
    value: "Sarni",
    label: "Sarni",
  },
  {
    value: "Sarsod",
    label: "Sarsod",
  },
  {
    value: "Sasaram",
    label: "Sasaram",
  },
  {
    value: "Sasvad",
    label: "Sasvad",
  },
  {
    value: "Satana",
    label: "Satana",
  },
  {
    value: "Satara",
    label: "Satara",
  },
  {
    value: "Sathyamangalam",
    label: "Sathyamangalam",
  },
  {
    value: "Satna",
    label: "Satna",
  },
  {
    value: "Sattenapalle",
    label: "Sattenapalle",
  },
  {
    value: "Sattur",
    label: "Sattur",
  },
  {
    value: "Saunda",
    label: "Saunda",
  },
  {
    value: "Saundattiyellamma",
    label: "Saundattiyellamma",
  },
  {
    value: "Sausar",
    label: "Sausar",
  },
  {
    value: "Savanur",
    label: "Savanur",
  },
  {
    value: "Savarkundla",
    label: "Savarkundla",
  },
  {
    value: "Savner",
    label: "Savner",
  },
  {
    value: "Sawai Madhopur",
    label: "Sawai Madhopur",
  },
  {
    value: "Sawantwadi",
    label: "Sawantwadi",
  },
  {
    value: "Sedam",
    label: "Sedam",
  },
  {
    value: "Sehore",
    label: "Sehore",
  },
  {
    value: "Sendhwa",
    label: "Sendhwa",
  },
  {
    value: "Seohara",
    label: "Seohara",
  },
  {
    value: "Seoni",
    label: "Seoni",
  },
  {
    value: "Seonimalwa",
    label: "Seonimalwa",
  },
  {
    value: "Shahabad",
    label: "Shahabad",
  },
  {
    value: "Shahabad Hardoi",
    label: "Shahabad Hardoi",
  },
  {
    value: "Shahabad Rampur",
    label: "Shahabad Rampur",
  },
  {
    value: "Shahade",
    label: "Shahade",
  },
  {
    value: "Shahbad",
    label: "Shahbad",
  },
  {
    value: "Shahdol",
    label: "Shahdol",
  },
  {
    value: "Shahganj",
    label: "Shahganj",
  },
  {
    value: "Shahjahanpur",
    label: "Shahjahanpur",
  },
  {
    value: "Shahpur",
    label: "Shahpur",
  },
  {
    value: "Shahpura",
    label: "Shahpura",
  },
  {
    value: "Shajapur",
    label: "Shajapur",
  },
  {
    value: "Shamgarh",
    label: "Shamgarh",
  },
  {
    value: "Shamli",
    label: "Shamli",
  },
  {
    value: "Shamsabad Agra",
    label: "Shamsabad Agra",
  },
  {
    value: "Shamsabad Farrukhabad",
    label: "Shamsabad Farrukhabad",
  },
  {
    value: "Shegaon",
    label: "Shegaon",
  },
  {
    value: "Sheikhpura",
    label: "Sheikhpura",
  },
  {
    value: "Shendurjana",
    label: "Shendurjana",
  },
  {
    value: "Shenkottai",
    label: "Shenkottai",
  },
  {
    value: "Sheoganj",
    label: "Sheoganj",
  },
  {
    value: "Sheohar",
    label: "Sheohar",
  },
  {
    value: "Sheopur",
    label: "Sheopur",
  },
  {
    value: "Sherghati",
    label: "Sherghati",
  },
  {
    value: "Sherkot",
    label: "Sherkot",
  },
  {
    value: "Shiggaon",
    label: "Shiggaon",
  },
  {
    value: "Shikaripur",
    label: "Shikaripur",
  },
  {
    value: "Shikarpur Bulandshahr",
    label: "Shikarpur Bulandshahr",
  },
  {
    value: "Shikohabad",
    label: "Shikohabad",
  },
  {
    value: "Shillong",
    label: "Shillong",
  },
  {
    value: "Shimla",
    label: "Shimla",
  },
  {
    value: "Shirdi",
    label: "Shirdi",
  },
  {
    value: "Shirpurwarwade",
    label: "Shirpurwarwade",
  },
  {
    value: "Shirur",
    label: "Shirur",
  },
  {
    value: "Shishgarh",
    label: "Shishgarh",
  },
  {
    value: "Shivamogga",
    label: "Shivamogga",
  },
  {
    value: "Shivpuri",
    label: "Shivpuri",
  },
  {
    value: "Sholavandan",
    label: "Sholavandan",
  },
  {
    value: "Sholingur",
    label: "Sholingur",
  },
  {
    value: "Shoranur",
    label: "Shoranur",
  },
  {
    value: "Shrigonda",
    label: "Shrigonda",
  },
  {
    value: "Shrirampur",
    label: "Shrirampur",
  },
  {
    value: "Shrirangapattana",
    label: "Shrirangapattana",
  },
  {
    value: "Shujalpur",
    label: "Shujalpur",
  },
  {
    value: "Siana",
    label: "Siana",
  },
  {
    value: "Sibsagar",
    label: "Sibsagar",
  },
  {
    value: "Siddipet",
    label: "Siddipet",
  },
  {
    value: "Sidhi",
    label: "Sidhi",
  },
  {
    value: "Sidhpur",
    label: "Sidhpur",
  },
  {
    value: "Sidlaghatta",
    label: "Sidlaghatta",
  },
  {
    value: "Sihor",
    label: "Sihor",
  },
  {
    value: "Sihora",
    label: "Sihora",
  },
  {
    value: "Sikanderpur",
    label: "Sikanderpur",
  },
  {
    value: "Sikandra Rao",
    label: "Sikandra Rao",
  },
  {
    value: "Sikandrabad",
    label: "Sikandrabad",
  },
  {
    value: "Sikar",
    label: "Sikar",
  },
  {
    value: "Silao",
    label: "Silao",
  },
  {
    value: "Silapathar",
    label: "Silapathar",
  },
  {
    value: "Silchar",
    label: "Silchar",
  },
  {
    value: "Siliguri",
    label: "Siliguri",
  },
  {
    value: "Sillod",
    label: "Sillod",
  },
  {
    value: "Silvassa",
    label: "Silvassa",
  },
  {
    value: "Simdega",
    label: "Simdega",
  },
  {
    value: "Sindagi",
    label: "Sindagi",
  },
  {
    value: "Sindhagi",
    label: "Sindhagi",
  },
  {
    value: "Sindhnur",
    label: "Sindhnur",
  },
  {
    value: "Singrauli",
    label: "Singrauli",
  },
  {
    value: "Sinnar",
    label: "Sinnar",
  },
  {
    value: "Sira",
    label: "Sira",
  },
  {
    value: "Sircilla",
    label: "Sircilla",
  },
  {
    value: "Sirhind Fatehgarh Sahib",
    label: "Sirhind Fatehgarh Sahib",
  },
  {
    value: "Sirkali",
    label: "Sirkali",
  },
  {
    value: "Sirohi",
    label: "Sirohi",
  },
  {
    value: "Sironj",
    label: "Sironj",
  },
  {
    value: "Sirsa",
    label: "Sirsa",
  },
  {
    value: "Sirsaganj",
    label: "Sirsaganj",
  },
  {
    value: "Sirsi",
    label: "Sirsi",
  },
  {
    value: "Siruguppa",
    label: "Siruguppa",
  },
  {
    value: "Sitamarhi",
    label: "Sitamarhi",
  },
  {
    value: "Sitapur",
    label: "Sitapur",
  },
  {
    value: "Sitarganj",
    label: "Sitarganj",
  },
  {
    value: "Sivaganga",
    label: "Sivaganga",
  },
  {
    value: "Sivagiri",
    label: "Sivagiri",
  },
  {
    value: "Sivakasi",
    label: "Sivakasi",
  },
  {
    value: "Siwan",
    label: "Siwan",
  },
  {
    value: "Sohagpur",
    label: "Sohagpur",
  },
  {
    value: "Sohna",
    label: "Sohna",
  },
  {
    value: "Sojat",
    label: "Sojat",
  },
  {
    value: "Solan",
    label: "Solan",
  },
  {
    value: "Solapur",
    label: "Solapur",
  },
  {
    value: "Sonamukhi",
    label: "Sonamukhi",
  },
  {
    value: "Sonepur",
    label: "Sonepur",
  },
  {
    value: "Songadh",
    label: "Songadh",
  },
  {
    value: "Sonipat",
    label: "Sonipat",
  },
  {
    value: "Sopore",
    label: "Sopore",
  },
  {
    value: "Soro",
    label: "Soro",
  },
  {
    value: "Soron",
    label: "Soron",
  },
  {
    value: "Soyagaon",
    label: "Soyagaon",
  },
  {
    value: "Sri Madhopur",
    label: "Sri Madhopur",
  },
  {
    value: "Srikakulam",
    label: "Srikakulam",
  },
  {
    value: "Srikalahasti",
    label: "Srikalahasti",
  },
  {
    value: "Srinagar",
    label: "Srinagar",
  },
  {
    value: "Srinivaspur",
    label: "Srinivaspur",
  },
  {
    value: "Srirampore",
    label: "Srirampore",
  },
  {
    value: "Srisailam Project Right Flank Colony Township",
    label: "Srisailam Project Right Flank Colony Township",
  },
  {
    value: "Srivilliputhur",
    label: "Srivilliputhur",
  },
  {
    value: "Sugauli",
    label: "Sugauli",
  },
  {
    value: "Sujangarh",
    label: "Sujangarh",
  },
  {
    value: "Sujanpur",
    label: "Sujanpur",
  },
  {
    value: "Sullurpeta",
    label: "Sullurpeta",
  },
  {
    value: "Sultanganj",
    label: "Sultanganj",
  },
  {
    value: "Sultanpur",
    label: "Sultanpur",
  },
  {
    value: "Sumerpur",
    label: "Sumerpur",
  },
  {
    value: "Sunabeda",
    label: "Sunabeda",
  },
  {
    value: "Sunam",
    label: "Sunam",
  },
  {
    value: "Sundargarh",
    label: "Sundargarh",
  },
  {
    value: "Sundarnagar",
    label: "Sundarnagar",
  },
  {
    value: "Supaul",
    label: "Supaul",
  },
  {
    value: "Surandai",
    label: "Surandai",
  },
  {
    value: "Surapura",
    label: "Surapura",
  },
  {
    value: "Surat",
    label: "Surat",
  },
  {
    value: "Suratgarh",
    label: "Suratgarh",
  },
  {
    value: "Suri",
    label: "Suri",
  },
  {
    value: "Suriyampalayam",
    label: "Suriyampalayam",
  },
  {
    value: "Suryapet",
    label: "Suryapet",
  },
  {
    value: "Tadepalligudem",
    label: "Tadepalligudem",
  },
  {
    value: "Tadpatri",
    label: "Tadpatri",
  },
  {
    value: "Takhatgarh",
    label: "Takhatgarh",
  },
  {
    value: "Taki",
    label: "Taki",
  },
  {
    value: "Talaja",
    label: "Talaja",
  },
  {
    value: "Talcher",
    label: "Talcher",
  },
  {
    value: "Talegaon Dabhade",
    label: "Talegaon Dabhade",
  },
  {
    value: "Talikota",
    label: "Talikota",
  },
  {
    value: "Taliparamba",
    label: "Taliparamba",
  },
  {
    value: "Talode",
    label: "Talode",
  },
  {
    value: "Talwara",
    label: "Talwara",
  },
  {
    value: "Tamluk",
    label: "Tamluk",
  },
  {
    value: "Tanda",
    label: "Tanda",
  },
  {
    value: "Tandur",
    label: "Tandur",
  },
  {
    value: "Tanuku",
    label: "Tanuku",
  },
  {
    value: "Tarakeswar",
    label: "Tarakeswar",
  },
  {
    value: "Tarana",
    label: "Tarana",
  },
  {
    value: "Taranagar",
    label: "Taranagar",
  },
  {
    value: "Taraori",
    label: "Taraori",
  },
  {
    value: "Tarbha",
    label: "Tarbha",
  },
  {
    value: "Tarikere",
    label: "Tarikere",
  },
  {
    value: "Tarn Taran",
    label: "Tarn Taran",
  },
  {
    value: "Tasgaon",
    label: "Tasgaon",
  },
  {
    value: "Tehri",
    label: "Tehri",
  },
  {
    value: "Tekkalakote",
    label: "Tekkalakote",
  },
  {
    value: "Tenali",
    label: "Tenali",
  },
  {
    value: "Tenkasi",
    label: "Tenkasi",
  },
  {
    value: "Tenu Damcumkathhara",
    label: "Tenu Damcumkathhara",
  },
  {
    value: "Terdal",
    label: "Terdal",
  },
  {
    value: "Tezpur",
    label: "Tezpur",
  },
  {
    value: "Thakurdwara",
    label: "Thakurdwara",
  },
  {
    value: "Thammampatti",
    label: "Thammampatti",
  },
  {
    value: "Thana Bhawan",
    label: "Thana Bhawan",
  },
  {
    value: "Thane",
    label: "Thane",
  },
  {
    value: "Thanesar",
    label: "Thanesar",
  },
  {
    value: "Thangadh",
    label: "Thangadh",
  },
  {
    value: "Thanjavur",
    label: "Thanjavur",
  },
  {
    value: "Tharad",
    label: "Tharad",
  },
  {
    value: "Tharamangalam",
    label: "Tharamangalam",
  },
  {
    value: "Tharangambadi",
    label: "Tharangambadi",
  },
  {
    value: "Theni Allinagaram",
    label: "Theni Allinagaram",
  },
  {
    value: "Thirumangalam",
    label: "Thirumangalam",
  },
  {
    value: "Thirupuvanam",
    label: "Thirupuvanam",
  },
  {
    value: "Thiruthuraipoondi",
    label: "Thiruthuraipoondi",
  },
  {
    value: "Thiruvalla",
    label: "Thiruvalla",
  },
  {
    value: "Thiruvallur",
    label: "Thiruvallur",
  },
  {
    value: "Thiruvananthapuram",
    label: "Thiruvananthapuram",
  },
  {
    value: "Thiruvarur",
    label: "Thiruvarur",
  },
  {
    value: "Thodupuzha",
    label: "Thodupuzha",
  },
  {
    value: "Thoubal",
    label: "Thoubal",
  },
  {
    value: "Thrissur",
    label: "Thrissur",
  },
  {
    value: "Thuraiyur",
    label: "Thuraiyur",
  },
  {
    value: "Tikamgarh",
    label: "Tikamgarh",
  },
  {
    value: "Tilda Newra",
    label: "Tilda Newra",
  },
  {
    value: "Tilhar",
    label: "Tilhar",
  },
  {
    value: "Tindivanam",
    label: "Tindivanam",
  },
  {
    value: "Tinsukia",
    label: "Tinsukia",
  },
  {
    value: "Tiptur",
    label: "Tiptur",
  },
  {
    value: "Tirora",
    label: "Tirora",
  },
  {
    value: "Tiruchendur",
    label: "Tiruchendur",
  },
  {
    value: "Tiruchengode",
    label: "Tiruchengode",
  },
  {
    value: "Tiruchirappalli",
    label: "Tiruchirappalli",
  },
  {
    value: "Tirukalukundram",
    label: "Tirukalukundram",
  },
  {
    value: "Tirukkoyilur",
    label: "Tirukkoyilur",
  },
  {
    value: "Tirunelveli",
    label: "Tirunelveli",
  },
  {
    value: "Tirupathur",
    label: "Tirupathur",
  },
  {
    value: "Tirupati",
    label: "Tirupati",
  },
  {
    value: "Tiruppur",
    label: "Tiruppur",
  },
  {
    value: "Tirur",
    label: "Tirur",
  },
  {
    value: "Tiruttani",
    label: "Tiruttani",
  },
  {
    value: "Tiruvannamalai",
    label: "Tiruvannamalai",
  },
  {
    value: "Tiruvethipuram",
    label: "Tiruvethipuram",
  },
  {
    value: "Tiruvuru",
    label: "Tiruvuru",
  },
  {
    value: "Tirwaganj",
    label: "Tirwaganj",
  },
  {
    value: "Titlagarh",
    label: "Titlagarh",
  },
  {
    value: "Tittakudi",
    label: "Tittakudi",
  },
  {
    value: "Todabhim",
    label: "Todabhim",
  },
  {
    value: "Todaraisingh",
    label: "Todaraisingh",
  },
  {
    value: "Tohana",
    label: "Tohana",
  },
  {
    value: "Tonk",
    label: "Tonk",
  },
  {
    value: "Tuensang",
    label: "Tuensang",
  },
  {
    value: "Tuljapur",
    label: "Tuljapur",
  },
  {
    value: "Tulsipur",
    label: "Tulsipur",
  },
  {
    value: "Tumkur",
    label: "Tumkur",
  },
  {
    value: "Tumsar",
    label: "Tumsar",
  },
  {
    value: "Tundla",
    label: "Tundla",
  },
  {
    value: "Tuni",
    label: "Tuni",
  },
  {
    value: "Tura",
    label: "Tura",
  },
  {
    value: "Uchgaon",
    label: "Uchgaon",
  },
  {
    value: "Udaipur",
    label: "Udaipur",
  },
  {
    value: "Udaipurwati",
    label: "Udaipurwati",
  },
  {
    value: "Udgir",
    label: "Udgir",
  },
  {
    value: "Udhagamandalam",
    label: "Udhagamandalam",
  },
  {
    value: "Udhampur",
    label: "Udhampur",
  },
  {
    value: "Udumalaipettai",
    label: "Udumalaipettai",
  },
  {
    value: "Udupi",
    label: "Udupi",
  },
  {
    value: "Ujhani",
    label: "Ujhani",
  },
  {
    value: "Ujjain",
    label: "Ujjain",
  },
  {
    value: "Umarga",
    label: "Umarga",
  },
  {
    value: "Umaria",
    label: "Umaria",
  },
  {
    value: "Umarkhed",
    label: "Umarkhed",
  },
  {
    value: "Umbergaon",
    label: "Umbergaon",
  },
  {
    value: "Umred",
    label: "Umred",
  },
  {
    value: "Umreth",
    label: "Umreth",
  },
  {
    value: "Una",
    label: "Una",
  },
  {
    value: "Unjha",
    label: "Unjha",
  },
  {
    value: "Unnamalaikadai",
    label: "Unnamalaikadai",
  },
  {
    value: "Unnao",
    label: "Unnao",
  },
  {
    value: "Upleta",
    label: "Upleta",
  },
  {
    value: "Uran",
    label: "Uran",
  },
  {
    value: "Uran Islampur",
    label: "Uran Islampur",
  },
  {
    value: "Uravakonda",
    label: "Uravakonda",
  },
  {
    value: "Urmar Tanda",
    label: "Urmar Tanda",
  },
  {
    value: "Usilampatti",
    label: "Usilampatti",
  },
  {
    value: "Uthamapalayam",
    label: "Uthamapalayam",
  },
  {
    value: "Uthiramerur",
    label: "Uthiramerur",
  },
  {
    value: "Utraula",
    label: "Utraula",
  },
  {
    value: "Vadakkuvalliyur",
    label: "Vadakkuvalliyur",
  },
  {
    value: "Vadalur",
    label: "Vadalur",
  },
  {
    value: "Vadgaon Kasba",
    label: "Vadgaon Kasba",
  },
  {
    value: "Vadipatti",
    label: "Vadipatti",
  },
  {
    value: "Vadnagar",
    label: "Vadnagar",
  },
  {
    value: "Vadodara",
    label: "Vadodara",
  },
  {
    value: "Vaijapur",
    label: "Vaijapur",
  },
  {
    value: "Vaikom",
    label: "Vaikom",
  },
  {
    value: "Valparai",
    label: "Valparai",
  },
  {
    value: "Valsad",
    label: "Valsad",
  },
  {
    value: "Vandavasi",
    label: "Vandavasi",
  },
  {
    value: "Vaniyambadi",
    label: "Vaniyambadi",
  },
  {
    value: "Vapi",
    label: "Vapi",
  },
  {
    value: "Varanasi",
    label: "Varanasi",
  },
  {
    value: "Varkala",
    label: "Varkala",
  },
  {
    value: "Vasaivirar",
    label: "Vasaivirar",
  },
  {
    value: "Vatakara",
    label: "Vatakara",
  },
  {
    value: "Vedaranyam",
    label: "Vedaranyam",
  },
  {
    value: "Vellakoil",
    label: "Vellakoil",
  },
  {
    value: "Vellore",
    label: "Vellore",
  },
  {
    value: "Venkatagiri",
    label: "Venkatagiri",
  },
  {
    value: "Veraval",
    label: "Veraval",
  },
  {
    value: "Vidisha",
    label: "Vidisha",
  },
  {
    value: "Vijainagar Ajmer",
    label: "Vijainagar Ajmer",
  },
  {
    value: "Vijapur",
    label: "Vijapur",
  },
  {
    value: "Vijayapura",
    label: "Vijayapura",
  },
  {
    value: "Vijayawada",
    label: "Vijayawada",
  },
  {
    value: "Vijaypur",
    label: "Vijaypur",
  },
  {
    value: "Vikarabad",
    label: "Vikarabad",
  },
  {
    value: "Vikramasingapuram",
    label: "Vikramasingapuram",
  },
  {
    value: "Viluppuram",
    label: "Viluppuram",
  },
  {
    value: "Vinukonda",
    label: "Vinukonda",
  },
  {
    value: "Viramgam",
    label: "Viramgam",
  },
  {
    value: "Virudhachalam",
    label: "Virudhachalam",
  },
  {
    value: "Virudhunagar",
    label: "Virudhunagar",
  },
  {
    value: "Visakhapatnam",
    label: "Visakhapatnam",
  },
  {
    value: "Visnagar",
    label: "Visnagar",
  },
  {
    value: "Viswanatham",
    label: "Viswanatham",
  },
  {
    value: "Vita",
    label: "Vita",
  },
  {
    value: "Vizianagaram",
    label: "Vizianagaram",
  },
  {
    value: "Vrindavan",
    label: "Vrindavan",
  },
  {
    value: "Vyara",
    label: "Vyara",
  },
  {
    value: "Wadgaon Road",
    label: "Wadgaon Road",
  },
  {
    value: "Wadhwan",
    label: "Wadhwan",
  },
  {
    value: "Wadi",
    label: "Wadi",
  },
  {
    value: "Wai",
    label: "Wai",
  },
  {
    value: "Wanaparthy",
    label: "Wanaparthy",
  },
  {
    value: "Wani",
    label: "Wani",
  },
  {
    value: "Wankaner",
    label: "Wankaner",
  },
  {
    value: "Wara Seoni",
    label: "Wara Seoni",
  },
  {
    value: "Warangal",
    label: "Warangal",
  },
  {
    value: "Wardha",
    label: "Wardha",
  },
  {
    value: "Warhapur",
    label: "Warhapur",
  },
  {
    value: "Warisaliganj",
    label: "Warisaliganj",
  },
  {
    value: "Warora",
    label: "Warora",
  },
  {
    value: "Warud",
    label: "Warud",
  },
  {
    value: "Washim",
    label: "Washim",
  },
  {
    value: "Wokha",
    label: "Wokha",
  },
  {
    value: "Yadgir",
    label: "Yadgir",
  },
  {
    value: "Yamunanagar",
    label: "Yamunanagar",
  },
  {
    value: "Yanam",
    label: "Yanam",
  },
  {
    value: "Yavatmal",
    label: "Yavatmal",
  },
  {
    value: "Yawal",
    label: "Yawal",
  },
  {
    value: "Yellandu",
    label: "Yellandu",
  },
  {
    value: "Yemmiganur",
    label: "Yemmiganur",
  },
  {
    value: "Yerraguntla",
    label: "Yerraguntla",
  },
  {
    value: "Yevla",
    label: "Yevla",
  },
  {
    value: "Zaidpur",
    label: "Zaidpur",
  },
  {
    value: "Zamania",
    label: "Zamania",
  },
  {
    value: "Zira",
    label: "Zira",
  },
  {
    value: "Zirakpur",
    label: "Zirakpur",
  },
  {
    value: "Zunheboto",
    label: "Zunheboto",
  },
];

const cityState = [
  {
    City: "Achalpur",
    State: "Maharashtra",
  },
  {
    City: "Achhnera",
    State: "Uttar Pradesh",
  },
  {
    City: "Adalaj",
    State: "Gujarat",
  },
  {
    City: "Adilabad",
    State: "Telangana",
  },
  {
    City: "Adityapur",
    State: "Jharkhand",
  },
  {
    City: "Adoni",
    State: "Andhra Pradesh",
  },
  {
    City: "Adoor",
    State: "Kerala",
  },
  {
    City: "Adra",
    State: "West Bengal",
  },
  {
    City: "Adyar",
    State: "Karnataka",
  },
  {
    City: "Afzalpur",
    State: "Karnataka",
  },
  {
    City: "Agartala",
    State: "Tripura",
  },
  {
    City: "Agra",
    State: "Uttar Pradesh",
  },
  {
    City: "Ahmedabad",
    State: "Gujarat",
  },
  {
    City: "Ahmednagar",
    State: "Maharashtra",
  },
  {
    City: "Aizawl",
    State: "Mizoram",
  },
  {
    City: "Ajmer",
    State: "Rajasthan",
  },
  {
    City: "Akola",
    State: "Maharashtra",
  },
  {
    City: "Akot",
    State: "Maharashtra",
  },
  {
    City: "Alappuzha",
    State: "Kerala",
  },
  {
    City: "Aligarh",
    State: "Uttar Pradesh",
  },
  {
    City: "Alipurdurban Agglomerationr",
    State: "West Bengal",
  },
  {
    City: "Alirajpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Allahabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Alwar",
    State: "Rajasthan",
  },
  {
    City: "Amalapuram",
    State: "Andhra Pradesh",
  },
  {
    City: "Amalner",
    State: "Maharashtra",
  },
  {
    City: "Ambejogai",
    State: "Maharashtra",
  },
  {
    City: "Ambikapur",
    State: "Chhattisgarh",
  },
  {
    City: "Amravati",
    State: "Maharashtra",
  },
  {
    City: "Amreli",
    State: "Gujarat",
  },
  {
    City: "Amritsar",
    State: "Punjab",
  },
  {
    City: "Amroha",
    State: "Uttar Pradesh",
  },
  {
    City: "Anakapalle",
    State: "Andhra Pradesh",
  },
  {
    City: "Anand",
    State: "Gujarat",
  },
  {
    City: "Anantapur",
    State: "Andhra Pradesh",
  },
  {
    City: "Anantnag",
    State: "Jammu And Kashmir",
  },
  {
    City: "Anjangaon",
    State: "Maharashtra",
  },
  {
    City: "Anjar",
    State: "Gujarat",
  },
  {
    City: "Ankleshwar",
    State: "Gujarat",
  },
  {
    City: "Arakkonam",
    State: "Tamil Nadu",
  },
  {
    City: "Arambagh",
    State: "West Bengal",
  },
  {
    City: "Araria",
    State: "Bihar",
  },
  {
    City: "Arrah",
    State: "Bihar",
  },
  {
    City: "Arsikere",
    State: "Karnataka",
  },
  {
    City: "Aruppukkottai",
    State: "Tamil Nadu",
  },
  {
    City: "Arvi",
    State: "Maharashtra",
  },
  {
    City: "Arwal",
    State: "Bihar",
  },
  {
    City: "Asansol",
    State: "West Bengal",
  },
  {
    City: "Asarganj",
    State: "Bihar",
  },
  {
    City: "Ashok Nagar",
    State: "Madhya Pradesh",
  },
  {
    City: "Athni",
    State: "Karnataka",
  },
  {
    City: "Attingal",
    State: "Kerala",
  },
  {
    City: "Aurangabad",
    State: "Bihar",
  },
  {
    City: "Aurangabad",
    State: "Maharashtra",
  },
  {
    City: "Azamgarh",
    State: "Uttar Pradesh",
  },
  {
    City: "Bagaha",
    State: "Bihar",
  },
  {
    City: "Bageshwar",
    State: "Uttarakhand",
  },
  {
    City: "Bahadurgarh",
    State: "Haryana",
  },
  {
    City: "Baharampur",
    State: "West Bengal",
  },
  {
    City: "Bahraich",
    State: "Uttar Pradesh",
  },
  {
    City: "Balaghat",
    State: "Madhya Pradesh",
  },
  {
    City: "Balangir",
    State: "Odisha",
  },
  {
    City: "Baleshwar Town",
    State: "Odisha",
  },
  {
    City: "Ballari",
    State: "Karnataka",
  },
  {
    City: "Balurghat",
    State: "West Bengal",
  },
  {
    City: "Bankura",
    State: "West Bengal",
  },
  {
    City: "Bapatla",
    State: "Andhra Pradesh",
  },
  {
    City: "Baramula",
    State: "Jammu And Kashmir",
  },
  {
    City: "Barbil",
    State: "Odisha",
  },
  {
    City: "Bargarh",
    State: "Odisha",
  },
  {
    City: "Barh",
    State: "Bihar",
  },
  {
    City: "Baripada Town",
    State: "Odisha",
  },
  {
    City: "Barmer",
    State: "Rajasthan",
  },
  {
    City: "Barnala",
    State: "Punjab",
  },
  {
    City: "Barpeta",
    State: "Assam",
  },
  {
    City: "Batala",
    State: "Punjab",
  },
  {
    City: "Bathinda",
    State: "Punjab",
  },
  {
    City: "Begusarai",
    State: "Bihar",
  },
  {
    City: "Belagavi",
    State: "Karnataka",
  },
  {
    City: "Bellampalle",
    State: "Telangana",
  },
  {
    City: "Belonia",
    State: "Tripura",
  },
  {
    City: "Bengaluru",
    State: "Karnataka",
  },
  {
    City: "Bettiah",
    State: "Bihar",
  },
  {
    City: "Bhaburban Agglomeration",
    State: "Bihar",
  },
  {
    City: "Bhadrachalam",
    State: "Telangana",
  },
  {
    City: "Bhadrak",
    State: "Odisha",
  },
  {
    City: "Bhagalpur",
    State: "Bihar",
  },
  {
    City: "Bhainsa",
    State: "Telangana",
  },
  {
    City: "Bharatpur",
    State: "Rajasthan",
  },
  {
    City: "Bharuch",
    State: "Gujarat",
  },
  {
    City: "Bhatapara",
    State: "Chhattisgarh",
  },
  {
    City: "Bhavnagar",
    State: "Gujarat",
  },
  {
    City: "Bhawanipatna",
    State: "Odisha",
  },
  {
    City: "Bheemunipatnam",
    State: "Andhra Pradesh",
  },
  {
    City: "Bhilai Nagar",
    State: "Chhattisgarh",
  },
  {
    City: "Bhilwara",
    State: "Rajasthan",
  },
  {
    City: "Bhimavaram",
    State: "Andhra Pradesh",
  },
  {
    City: "Bhiwandi",
    State: "Maharashtra",
  },
  {
    City: "Bhiwani",
    State: "Haryana",
  },
  {
    City: "Bhongir",
    State: "Telangana",
  },
  {
    City: "Bhopal",
    State: "Madhya Pradesh",
  },
  {
    City: "Bhubaneswar",
    State: "Odisha",
  },
  {
    City: "Bhuj",
    State: "Gujarat",
  },
  {
    City: "Bikaner",
    State: "Rajasthan",
  },
  {
    City: "Bilaspur",
    State: "Chhattisgarh",
  },
  {
    City: "Bobbili",
    State: "Andhra Pradesh",
  },
  {
    City: "Bodhan",
    State: "Telangana",
  },
  {
    City: "Bokaro Steel City",
    State: "Jharkhand",
  },
  {
    City: "Bongaigaon City",
    State: "Assam",
  },
  {
    City: "Brahmapur",
    State: "Odisha",
  },
  {
    City: "Buxar",
    State: "Bihar",
  },
  {
    City: "Byasanagar",
    State: "Odisha",
  },
  {
    City: "Chaibasa",
    State: "Jharkhand",
  },
  {
    City: "Chalakudy",
    State: "Kerala",
  },
  {
    City: "Chandausi",
    State: "Uttar Pradesh",
  },
  {
    City: "Chandigarh",
    State: "Chandigarh",
  },
  {
    City: "Changanassery",
    State: "Kerala",
  },
  {
    City: "Charkhi Dadri",
    State: "Haryana",
  },
  {
    City: "Chatra",
    State: "Jharkhand",
  },
  {
    City: "Chennai",
    State: "Tamil Nadu",
  },
  {
    City: "Cherthala",
    State: "Kerala",
  },
  {
    City: "Chhapra",
    State: "Bihar",
  },
  {
    City: "Chhapra",
    State: "Gujarat",
  },
  {
    City: "Chikkamagaluru",
    State: "Karnataka",
  },
  {
    City: "Chilakaluripet",
    State: "Andhra Pradesh",
  },
  {
    City: "Chirala",
    State: "Andhra Pradesh",
  },
  {
    City: "Chirkunda",
    State: "Jharkhand",
  },
  {
    City: "Chirmiri",
    State: "Chhattisgarh",
  },
  {
    City: "Chittoor",
    State: "Andhra Pradesh",
  },
  {
    City: "Chitturthathamangalam",
    State: "Kerala",
  },
  {
    City: "Coimbatore",
    State: "Tamil Nadu",
  },
  {
    City: "Cuttack",
    State: "Odisha",
  },
  {
    City: "Dallirajhara",
    State: "Chhattisgarh",
  },
  {
    City: "Darbhanga",
    State: "Bihar",
  },
  {
    City: "Darjiling",
    State: "West Bengal",
  },
  {
    City: "Davanagere",
    State: "Karnataka",
  },
  {
    City: "Deesa",
    State: "Gujarat",
  },
  {
    City: "Dehradun",
    State: "Uttarakhand",
  },
  {
    City: "Dehrionsone",
    State: "Bihar",
  },
  {
    City: "Delhi",
    State: "Delhi",
  },
  {
    City: "Deoghar",
    State: "Jharkhand",
  },
  {
    City: "Dhamtari",
    State: "Chhattisgarh",
  },
  {
    City: "Dhanbad",
    State: "Jharkhand",
  },
  {
    City: "Dharmanagar",
    State: "Tripura",
  },
  {
    City: "Dharmavaram",
    State: "Andhra Pradesh",
  },
  {
    City: "Dhenkanal",
    State: "Odisha",
  },
  {
    City: "Dhoraji",
    State: "Gujarat",
  },
  {
    City: "Dhubri",
    State: "Assam",
  },
  {
    City: "Dhule",
    State: "Maharashtra",
  },
  {
    City: "Dhuri",
    State: "Punjab",
  },
  {
    City: "Dibrugarh",
    State: "Assam",
  },
  {
    City: "Dimapur",
    State: "Nagaland",
  },
  {
    City: "Diphu",
    State: "Assam",
  },
  {
    City: "Dumka",
    State: "Jharkhand",
  },
  {
    City: "Dumraon",
    State: "Bihar",
  },
  {
    City: "Durg",
    State: "Chhattisgarh",
  },
  {
    City: "Eluru",
    State: "Andhra Pradesh",
  },
  {
    City: "English Bazar",
    State: "West Bengal",
  },
  {
    City: "Erode",
    State: "Tamil Nadu",
  },
  {
    City: "Etawah",
    State: "Uttar Pradesh",
  },
  {
    City: "Faridabad",
    State: "Haryana",
  },
  {
    City: "Faridkot",
    State: "Punjab",
  },
  {
    City: "Farooqnagar",
    State: "Telangana",
  },
  {
    City: "Fatehabad",
    State: "Haryana",
  },
  {
    City: "Fatehpur Sikri",
    State: "Uttar Pradesh",
  },
  {
    City: "Fazilka",
    State: "Punjab",
  },
  {
    City: "Firozabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Firozpur",
    State: "Punjab",
  },
  {
    City: "Firozpur Cantt",
    State: "Punjab",
  },
  {
    City: "Forbesganj",
    State: "Bihar",
  },
  {
    City: "Gadwal",
    State: "Telangana",
  },
  {
    City: "Gangarampur",
    State: "West Bengal",
  },
  {
    City: "Ganjbasoda",
    State: "Madhya Pradesh",
  },
  {
    City: "Gaya",
    State: "Bihar",
  },
  {
    City: "Giridih",
    State: "Jharkhand",
  },
  {
    City: "Goalpara",
    State: "Assam",
  },
  {
    City: "Gobichettipalayam",
    State: "Tamil Nadu",
  },
  {
    City: "Gobindgarh",
    State: "Punjab",
  },
  {
    City: "Godhra",
    State: "Gujarat",
  },
  {
    City: "Gohana",
    State: "Haryana",
  },
  {
    City: "Gokak",
    State: "Karnataka",
  },
  {
    City: "Gooty",
    State: "Andhra Pradesh",
  },
  {
    City: "Gopalganj",
    State: "Bihar",
  },
  {
    City: "Gudivada",
    State: "Andhra Pradesh",
  },
  {
    City: "Gudur",
    State: "Andhra Pradesh",
  },
  {
    City: "Gumia",
    State: "Jharkhand",
  },
  {
    City: "Guntakal",
    State: "Andhra Pradesh",
  },
  {
    City: "Guntur",
    State: "Andhra Pradesh",
  },
  {
    City: "Gurdaspur",
    State: "Punjab",
  },
  {
    City: "Gurgaon",
    State: "Haryana",
  },
  {
    City: "Guruvayoor",
    State: "Kerala",
  },
  {
    City: "Guwahati",
    State: "Assam",
  },
  {
    City: "Gwalior",
    State: "Madhya Pradesh",
  },
  {
    City: "Habra",
    State: "West Bengal",
  },
  {
    City: "Hajipur",
    State: "Bihar",
  },
  {
    City: "Haldwanicumkathgodam",
    State: "Uttarakhand",
  },
  {
    City: "Hansi",
    State: "Haryana",
  },
  {
    City: "Hapur",
    State: "Uttar Pradesh",
  },
  {
    City: "Hardoi",
    State: "Uttar Pradesh",
  },
  {
    City: "Hardwar",
    State: "Uttarakhand",
  },
  {
    City: "Hazaribag",
    State: "Jharkhand",
  },
  {
    City: "Hindupur",
    State: "Andhra Pradesh",
  },
  {
    City: "Hisar",
    State: "Haryana",
  },
  {
    City: "Hoshiarpur",
    State: "Punjab",
  },
  {
    City: "Hublidharwad",
    State: "Karnataka",
  },
  {
    City: "Huglichinsurah",
    State: "West Bengal",
  },
  {
    City: "Hyderabad",
    State: "Telangana",
  },
  {
    City: "Ichalkaranji",
    State: "Maharashtra",
  },
  {
    City: "Imphal",
    State: "Manipur",
  },
  {
    City: "Indore",
    State: "Madhya Pradesh",
  },
  {
    City: "Itarsi",
    State: "Madhya Pradesh",
  },
  {
    City: "Jabalpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Jagdalpur",
    State: "Chhattisgarh",
  },
  {
    City: "Jaggaiahpet",
    State: "Andhra Pradesh",
  },
  {
    City: "Jagraon",
    State: "Punjab",
  },
  {
    City: "Jagtial",
    State: "Telangana",
  },
  {
    City: "Jaipur",
    State: "Rajasthan",
  },
  {
    City: "Jalandhar",
    State: "Punjab",
  },
  {
    City: "Jalandhar Cantt",
    State: "Punjab",
  },
  {
    City: "Jalpaiguri",
    State: "West Bengal",
  },
  {
    City: "Jamalpur",
    State: "Bihar",
  },
  {
    City: "Jammalamadugu",
    State: "Andhra Pradesh",
  },
  {
    City: "Jammu",
    State: "Jammu And Kashmir",
  },
  {
    City: "Jamnagar",
    State: "Gujarat",
  },
  {
    City: "Jamshedpur",
    State: "Jharkhand",
  },
  {
    City: "Jamui",
    State: "Bihar",
  },
  {
    City: "Jangaon",
    State: "Telangana",
  },
  {
    City: "Jatani",
    State: "Odisha",
  },
  {
    City: "Jehanabad",
    State: "Bihar",
  },
  {
    City: "Jhansi",
    State: "Uttar Pradesh",
  },
  {
    City: "Jhargram",
    State: "West Bengal",
  },
  {
    City: "Jharsuguda",
    State: "Odisha",
  },
  {
    City: "Jhumri Tilaiya",
    State: "Jharkhand",
  },
  {
    City: "Jind",
    State: "Haryana",
  },
  {
    City: "Jodhpur",
    State: "Rajasthan",
  },
  {
    City: "Jorhat",
    State: "Assam",
  },
  {
    City: "Kadapa",
    State: "Andhra Pradesh",
  },
  {
    City: "Kadi",
    State: "Gujarat",
  },
  {
    City: "Kadiri",
    State: "Andhra Pradesh",
  },
  {
    City: "Kagaznagar",
    State: "Telangana",
  },
  {
    City: "Kailasahar",
    State: "Tripura",
  },
  {
    City: "Kaithal",
    State: "Haryana",
  },
  {
    City: "Kakinada",
    State: "Andhra Pradesh",
  },
  {
    City: "Kalimpong",
    State: "West Bengal",
  },
  {
    City: "Kalpi",
    State: "Uttar Pradesh",
  },
  {
    City: "Kalyandombivali",
    State: "Maharashtra",
  },
  {
    City: "Kamareddy",
    State: "Telangana",
  },
  {
    City: "Kancheepuram",
    State: "Tamil Nadu",
  },
  {
    City: "Kandukur",
    State: "Andhra Pradesh",
  },
  {
    City: "Kanhangad",
    State: "Kerala",
  },
  {
    City: "Kannur",
    State: "Kerala",
  },
  {
    City: "Kanpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Kapadvanj",
    State: "Gujarat",
  },
  {
    City: "Kapurthala",
    State: "Punjab",
  },
  {
    City: "Karaikal",
    State: "Puducherry",
  },
  {
    City: "Karimganj",
    State: "Assam",
  },
  {
    City: "Karimnagar",
    State: "Telangana",
  },
  {
    City: "Karjat",
    State: "Maharashtra",
  },
  {
    City: "Karnal",
    State: "Haryana",
  },
  {
    City: "Karur",
    State: "Tamil Nadu",
  },
  {
    City: "Karwar",
    State: "Karnataka",
  },
  {
    City: "Kasaragod",
    State: "Kerala",
  },
  {
    City: "Kashipur",
    State: "Uttarakhand",
  },
  {
    City: "Kathurban Agglomeration",
    State: "Jammu And Kashmir",
  },
  {
    City: "Katihar",
    State: "Bihar",
  },
  {
    City: "Kavali",
    State: "Andhra Pradesh",
  },
  {
    City: "Kayamkulam",
    State: "Kerala",
  },
  {
    City: "Kendrapara",
    State: "Odisha",
  },
  {
    City: "Kendujhar",
    State: "Odisha",
  },
  {
    City: "Keshod",
    State: "Gujarat",
  },
  {
    City: "Khair",
    State: "Uttar Pradesh",
  },
  {
    City: "Khambhat",
    State: "Gujarat",
  },
  {
    City: "Khammam",
    State: "Telangana",
  },
  {
    City: "Khanna",
    State: "Punjab",
  },
  {
    City: "Kharagpur",
    State: "West Bengal",
  },
  {
    City: "Kharar",
    State: "Punjab",
  },
  {
    City: "Khowai",
    State: "Tripura",
  },
  {
    City: "Kishanganj",
    State: "Bihar",
  },
  {
    City: "Kochi",
    State: "Kerala",
  },
  {
    City: "Kodungallur",
    State: "Kerala",
  },
  {
    City: "Kohima",
    State: "Nagaland",
  },
  {
    City: "Kolar",
    State: "Karnataka",
  },
  {
    City: "Kolkata",
    State: "West Bengal",
  },
  {
    City: "Kollam",
    State: "Kerala",
  },
  {
    City: "Koratla",
    State: "Telangana",
  },
  {
    City: "Korba",
    State: "Chhattisgarh",
  },
  {
    City: "Kot Kapura",
    State: "Punjab",
  },
  {
    City: "Kothagudem",
    State: "Telangana",
  },
  {
    City: "Kottayam",
    State: "Kerala",
  },
  {
    City: "Kovvur",
    State: "Andhra Pradesh",
  },
  {
    City: "Koyilandy",
    State: "Kerala",
  },
  {
    City: "Kozhikode",
    State: "Kerala",
  },
  {
    City: "Kunnamkulam",
    State: "Kerala",
  },
  {
    City: "Kurnool",
    State: "Andhra Pradesh",
  },
  {
    City: "Kyathampalle",
    State: "Telangana",
  },
  {
    City: "Lachhmangarh",
    State: "Rajasthan",
  },
  {
    City: "Ladnu",
    State: "Rajasthan",
  },
  {
    City: "Ladwa",
    State: "Haryana",
  },
  {
    City: "Lahar",
    State: "Madhya Pradesh",
  },
  {
    City: "Laharpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Lakheri",
    State: "Rajasthan",
  },
  {
    City: "Lakhimpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Lakhisarai",
    State: "Bihar",
  },
  {
    City: "Lakshmeshwar",
    State: "Karnataka",
  },
  {
    City: "Lal Gopalganj Nindaura",
    State: "Uttar Pradesh",
  },
  {
    City: "Lalganj",
    State: "Bihar",
  },
  {
    City: "Lalganj",
    State: "Uttar Pradesh",
  },
  {
    City: "Lalgudi",
    State: "Tamil Nadu",
  },
  {
    City: "Lalitpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Lalsot",
    State: "Rajasthan",
  },
  {
    City: "Lanka",
    State: "Assam",
  },
  {
    City: "Lar",
    State: "Uttar Pradesh",
  },
  {
    City: "Lathi",
    State: "Gujarat",
  },
  {
    City: "Latur",
    State: "Maharashtra",
  },
  {
    City: "Lilong",
    State: "Manipur",
  },
  {
    City: "Limbdi",
    State: "Gujarat",
  },
  {
    City: "Lingsugur",
    State: "Karnataka",
  },
  {
    City: "Loha",
    State: "Maharashtra",
  },
  {
    City: "Lohardaga",
    State: "Jharkhand",
  },
  {
    City: "Lonar",
    State: "Maharashtra",
  },
  {
    City: "Lonavla",
    State: "Maharashtra",
  },
  {
    City: "Longowal",
    State: "Punjab",
  },
  {
    City: "Loni",
    State: "Uttar Pradesh",
  },
  {
    City: "Losal",
    State: "Rajasthan",
  },
  {
    City: "Lucknow",
    State: "Uttar Pradesh",
  },
  {
    City: "Ludhiana",
    State: "Punjab",
  },
  {
    City: "Lumding",
    State: "Assam",
  },
  {
    City: "Lunawada",
    State: "Gujarat",
  },
  {
    City: "Lunglei",
    State: "Mizoram",
  },
  {
    City: "Macherla",
    State: "Andhra Pradesh",
  },
  {
    City: "Machilipatnam",
    State: "Andhra Pradesh",
  },
  {
    City: "Madanapalle",
    State: "Andhra Pradesh",
  },
  {
    City: "Maddur",
    State: "Karnataka",
  },
  {
    City: "Madhepura",
    State: "Bihar",
  },
  {
    City: "Madhubani",
    State: "Bihar",
  },
  {
    City: "Madhugiri",
    State: "Karnataka",
  },
  {
    City: "Madhupur",
    State: "Jharkhand",
  },
  {
    City: "Madikeri",
    State: "Karnataka",
  },
  {
    City: "Madurai",
    State: "Tamil Nadu",
  },
  {
    City: "Magadi",
    State: "Karnataka",
  },
  {
    City: "Mahad",
    State: "Maharashtra",
  },
  {
    City: "Mahalingapura",
    State: "Karnataka",
  },
  {
    City: "Maharajganj",
    State: "Bihar",
  },
  {
    City: "Maharajpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Mahasamund",
    State: "Chhattisgarh",
  },
  {
    City: "Mahbubnagar",
    State: "Telangana",
  },
  {
    City: "Mahe",
    State: "Puducherry",
  },
  {
    City: "Mahemdabad",
    State: "Gujarat",
  },
  {
    City: "Mahendragarh",
    State: "Haryana",
  },
  {
    City: "Mahesana",
    State: "Gujarat",
  },
  {
    City: "Mahidpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Mahnar Bazar",
    State: "Bihar",
  },
  {
    City: "Mahuva",
    State: "Gujarat",
  },
  {
    City: "Maihar",
    State: "Madhya Pradesh",
  },
  {
    City: "Mainaguri",
    State: "West Bengal",
  },
  {
    City: "Makhdumpur",
    State: "Bihar",
  },
  {
    City: "Makrana",
    State: "Rajasthan",
  },
  {
    City: "Malaj Khand",
    State: "Madhya Pradesh",
  },
  {
    City: "Malappuram",
    State: "Kerala",
  },
  {
    City: "Malavalli",
    State: "Karnataka",
  },
  {
    City: "Malda",
    State: "West Bengal",
  },
  {
    City: "Malegaon",
    State: "Maharashtra",
  },
  {
    City: "Malerkotla",
    State: "Punjab",
  },
  {
    City: "Malkangiri",
    State: "Odisha",
  },
  {
    City: "Malkapur",
    State: "Maharashtra",
  },
  {
    City: "Malout",
    State: "Punjab",
  },
  {
    City: "Malpura",
    State: "Rajasthan",
  },
  {
    City: "Malur",
    State: "Karnataka",
  },
  {
    City: "Manachanallur",
    State: "Tamil Nadu",
  },
  {
    City: "Manasa",
    State: "Madhya Pradesh",
  },
  {
    City: "Manavadar",
    State: "Gujarat",
  },
  {
    City: "Manawar",
    State: "Madhya Pradesh",
  },
  {
    City: "Mancherial",
    State: "Telangana",
  },
  {
    City: "Mandalgarh",
    State: "Rajasthan",
  },
  {
    City: "Mandamarri",
    State: "Telangana",
  },
  {
    City: "Mandapeta",
    State: "Andhra Pradesh",
  },
  {
    City: "Mandawa",
    State: "Rajasthan",
  },
  {
    City: "Mandi",
    State: "Himachal Pradesh",
  },
  {
    City: "Mandi Dabwali",
    State: "Haryana",
  },
  {
    City: "Mandideep",
    State: "Madhya Pradesh",
  },
  {
    City: "Mandla",
    State: "Madhya Pradesh",
  },
  {
    City: "Mandsaur",
    State: "Madhya Pradesh",
  },
  {
    City: "Mandvi",
    State: "Gujarat",
  },
  {
    City: "Mandya",
    State: "Karnataka",
  },
  {
    City: "Manendragarh",
    State: "Chhattisgarh",
  },
  {
    City: "Maner",
    State: "Bihar",
  },
  {
    City: "Mangaldoi",
    State: "Assam",
  },
  {
    City: "Mangaluru",
    State: "Karnataka",
  },
  {
    City: "Mangalvedhe",
    State: "Maharashtra",
  },
  {
    City: "Manglaur",
    State: "Uttarakhand",
  },
  {
    City: "Mangrol",
    State: "Gujarat",
  },
  {
    City: "Mangrol",
    State: "Rajasthan",
  },
  {
    City: "Mangrulpir",
    State: "Maharashtra",
  },
  {
    City: "Manihari",
    State: "Bihar",
  },
  {
    City: "Manjlegaon",
    State: "Maharashtra",
  },
  {
    City: "Mankachar",
    State: "Assam",
  },
  {
    City: "Manmad",
    State: "Maharashtra",
  },
  {
    City: "Mansa",
    State: "Gujarat",
  },
  {
    City: "Mansa",
    State: "Punjab",
  },
  {
    City: "Manuguru",
    State: "Telangana",
  },
  {
    City: "Manvi",
    State: "Karnataka",
  },
  {
    City: "Manwath",
    State: "Maharashtra",
  },
  {
    City: "Mapusa",
    State: "Goa",
  },
  {
    City: "Margao",
    State: "Goa",
  },
  {
    City: "Margherita",
    State: "Assam",
  },
  {
    City: "Marhaura",
    State: "Bihar",
  },
  {
    City: "Mariani",
    State: "Assam",
  },
  {
    City: "Marigaon",
    State: "Assam",
  },
  {
    City: "Markapur",
    State: "Andhra Pradesh",
  },
  {
    City: "Marmagao",
    State: "Goa",
  },
  {
    City: "Masaurhi",
    State: "Bihar",
  },
  {
    City: "Mathabhanga",
    State: "West Bengal",
  },
  {
    City: "Mathura",
    State: "Uttar Pradesh",
  },
  {
    City: "Mattannur",
    State: "Kerala",
  },
  {
    City: "Mauganj",
    State: "Madhya Pradesh",
  },
  {
    City: "Mavelikkara",
    State: "Kerala",
  },
  {
    City: "Mavoor",
    State: "Kerala",
  },
  {
    City: "Mayang Imphal",
    State: "Manipur",
  },
  {
    City: "Medak",
    State: "Telangana",
  },
  {
    City: "Medininagar Daltonganj",
    State: "Jharkhand",
  },
  {
    City: "Medinipur",
    State: "West Bengal",
  },
  {
    City: "Meerut",
    State: "Uttar Pradesh",
  },
  {
    City: "Mehkar",
    State: "Maharashtra",
  },
  {
    City: "Memari",
    State: "West Bengal",
  },
  {
    City: "Merta City",
    State: "Rajasthan",
  },
  {
    City: "Mhaswad",
    State: "Maharashtra",
  },
  {
    City: "Mhow Cantonment",
    State: "Madhya Pradesh",
  },
  {
    City: "Mhowgaon",
    State: "Madhya Pradesh",
  },
  {
    City: "Mihijam",
    State: "Jharkhand",
  },
  {
    City: "Mirabhayandar",
    State: "Maharashtra",
  },
  {
    City: "Mirganj",
    State: "Bihar",
  },
  {
    City: "Miryalaguda",
    State: "Telangana",
  },
  {
    City: "Modasa",
    State: "Gujarat",
  },
  {
    City: "Modinagar",
    State: "Uttar Pradesh",
  },
  {
    City: "Moga",
    State: "Punjab",
  },
  {
    City: "Mohali",
    State: "Punjab",
  },
  {
    City: "Mokameh",
    State: "Bihar",
  },
  {
    City: "Mokokchung",
    State: "Nagaland",
  },
  {
    City: "Monoharpur",
    State: "West Bengal",
  },
  {
    City: "Moradabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Morena",
    State: "Madhya Pradesh",
  },
  {
    City: "Morinda India",
    State: "Punjab",
  },
  {
    City: "Morshi",
    State: "Maharashtra",
  },
  {
    City: "Morvi",
    State: "Gujarat",
  },
  {
    City: "Motihari",
    State: "Bihar",
  },
  {
    City: "Motipur",
    State: "Bihar",
  },
  {
    City: "Mount Abu",
    State: "Rajasthan",
  },
  {
    City: "Mudabidri",
    State: "Karnataka",
  },
  {
    City: "Mudalagi",
    State: "Karnataka",
  },
  {
    City: "Muddebihal",
    State: "Karnataka",
  },
  {
    City: "Mudhol",
    State: "Karnataka",
  },
  {
    City: "Mukerian",
    State: "Punjab",
  },
  {
    City: "Mukhed",
    State: "Maharashtra",
  },
  {
    City: "Muktsar",
    State: "Punjab",
  },
  {
    City: "Mul",
    State: "Maharashtra",
  },
  {
    City: "Mulbagal",
    State: "Karnataka",
  },
  {
    City: "Multai",
    State: "Madhya Pradesh",
  },
  {
    City: "Mumbai",
    State: "Maharashtra",
  },
  {
    City: "Mundargi",
    State: "Karnataka",
  },
  {
    City: "Mundi",
    State: "Madhya Pradesh",
  },
  {
    City: "Mungeli",
    State: "Chhattisgarh",
  },
  {
    City: "Munger",
    State: "Bihar",
  },
  {
    City: "Murliganj",
    State: "Bihar",
  },
  {
    City: "Murshidabad",
    State: "West Bengal",
  },
  {
    City: "Murtijapur",
    State: "Maharashtra",
  },
  {
    City: "Murwara Katni",
    State: "Madhya Pradesh",
  },
  {
    City: "Musabani",
    State: "Jharkhand",
  },
  {
    City: "Mussoorie",
    State: "Uttarakhand",
  },
  {
    City: "Muvattupuzha",
    State: "Kerala",
  },
  {
    City: "Muzaffarpur",
    State: "Bihar",
  },
  {
    City: "Mysore",
    State: "Karnatka",
  },
  {
    City: "Nabadwip",
    State: "West Bengal",
  },
  {
    City: "Nabarangapur",
    State: "Odisha",
  },
  {
    City: "Nabha",
    State: "Punjab",
  },
  {
    City: "Nadbai",
    State: "Rajasthan",
  },
  {
    City: "Nadiad",
    State: "Gujarat",
  },
  {
    City: "Nagaon",
    State: "Assam",
  },
  {
    City: "Nagapattinam",
    State: "Tamil Nadu",
  },
  {
    City: "Nagar",
    State: "Rajasthan",
  },
  {
    City: "Nagari",
    State: "Andhra Pradesh",
  },
  {
    City: "Nagarkurnool",
    State: "Telangana",
  },
  {
    City: "Nagaur",
    State: "Rajasthan",
  },
  {
    City: "Nagda",
    State: "Madhya Pradesh",
  },
  {
    City: "Nagercoil",
    State: "Tamil Nadu",
  },
  {
    City: "Nagina",
    State: "Uttar Pradesh",
  },
  {
    City: "Nagla",
    State: "Uttarakhand",
  },
  {
    City: "Nagpur",
    State: "Maharashtra",
  },
  {
    City: "Nahan",
    State: "Himachal Pradesh",
  },
  {
    City: "Naharlagun",
    State: "Arunachal Pradesh",
  },
  {
    City: "Naidupet",
    State: "Andhra Pradesh",
  },
  {
    City: "Naihati",
    State: "West Bengal",
  },
  {
    City: "Naila Janjgir",
    State: "Chhattisgarh",
  },
  {
    City: "Nainital",
    State: "Uttarakhand",
  },
  {
    City: "Nainpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Najibabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Nakodar",
    State: "Punjab",
  },
  {
    City: "Nakur",
    State: "Uttar Pradesh",
  },
  {
    City: "Nalbari",
    State: "Assam",
  },
  {
    City: "Namagiripettai",
    State: "Tamil Nadu",
  },
  {
    City: "Namakkal",
    State: "Tamil Nadu",
  },
  {
    City: "Nandedwaghala",
    State: "Maharashtra",
  },
  {
    City: "Nandgaon",
    State: "Maharashtra",
  },
  {
    City: "Nandivaramguduvancheri",
    State: "Tamil Nadu",
  },
  {
    City: "Nandura",
    State: "Maharashtra",
  },
  {
    City: "Nandurbar",
    State: "Maharashtra",
  },
  {
    City: "Nandyal",
    State: "Andhra Pradesh",
  },
  {
    City: "Nangal",
    State: "Punjab",
  },
  {
    City: "Nanjangud",
    State: "Karnataka",
  },
  {
    City: "Nanjikottai",
    State: "Tamil Nadu",
  },
  {
    City: "Nanpara",
    State: "Uttar Pradesh",
  },
  {
    City: "Narasapuram",
    State: "Andhra Pradesh",
  },
  {
    City: "Narasaraopet",
    State: "Andhra Pradesh",
  },
  {
    City: "Naraura",
    State: "Uttar Pradesh",
  },
  {
    City: "Narayanpet",
    State: "Telangana",
  },
  {
    City: "Nargund",
    State: "Karnataka",
  },
  {
    City: "Narkatiaganj",
    State: "Bihar",
  },
  {
    City: "Narkhed",
    State: "Maharashtra",
  },
  {
    City: "Narnaul",
    State: "Haryana",
  },
  {
    City: "Narsinghgarh",
    State: "Madhya Pradesh",
  },
  {
    City: "Narsinghgarh",
    State: "Madhya Pradesh",
  },
  {
    City: "Narsipatnam",
    State: "Andhra Pradesh",
  },
  {
    City: "Narwana",
    State: "Haryana",
  },
  {
    City: "Nashik",
    State: "Maharashtra",
  },
  {
    City: "Nasirabad",
    State: "Rajasthan",
  },
  {
    City: "Natham",
    State: "Tamil Nadu",
  },
  {
    City: "Nathdwara",
    State: "Rajasthan",
  },
  {
    City: "Naugachhia",
    State: "Bihar",
  },
  {
    City: "Naugawan Sadat",
    State: "Uttar Pradesh",
  },
  {
    City: "Nautanwa",
    State: "Uttar Pradesh",
  },
  {
    City: "Navalgund",
    State: "Karnataka",
  },
  {
    City: "Navsari",
    State: "Gujarat",
  },
  {
    City: "Nawabganj",
    State: "Uttar Pradesh",
  },
  {
    City: "Nawada",
    State: "Bihar",
  },
  {
    City: "Nawanshahr",
    State: "Punjab",
  },
  {
    City: "Nawapur",
    State: "Maharashtra",
  },
  {
    City: "Nedumangad",
    State: "Kerala",
  },
  {
    City: "Neemkathana",
    State: "Rajasthan",
  },
  {
    City: "Neemuch",
    State: "Madhya Pradesh",
  },
  {
    City: "Nehtaur",
    State: "Uttar Pradesh",
  },
  {
    City: "Nelamangala",
    State: "Karnataka",
  },
  {
    City: "Nellikuppam",
    State: "Tamil Nadu",
  },
  {
    City: "Nellore",
    State: "Andhra Pradesh",
  },
  {
    City: "Nepanagar",
    State: "Madhya Pradesh",
  },
  {
    City: "New Delhi",
    State: "Delhi",
  },
  {
    City: "Neyveli Ts",
    State: "Tamil Nadu",
  },
  {
    City: "Neyyattinkara",
    State: "Kerala",
  },
  {
    City: "Nidadavole",
    State: "Andhra Pradesh",
  },
  {
    City: "Nilambur",
    State: "Kerala",
  },
  {
    City: "Nilanga",
    State: "Maharashtra",
  },
  {
    City: "Nimbahera",
    State: "Rajasthan",
  },
  {
    City: "Nirmal",
    State: "Telangana",
  },
  {
    City: "Niwai",
    State: "Uttar Pradesh",
  },
  {
    City: "Niwari",
    State: "Madhya Pradesh",
  },
  {
    City: "Nizamabad",
    State: "Telangana",
  },
  {
    City: "Nohar",
    State: "Rajasthan",
  },
  {
    City: "Noida",
    State: "Uttar Pradesh",
  },
  {
    City: "Nokha",
    State: "Bihar",
  },
  {
    City: "Nokha",
    State: "Rajasthan",
  },
  {
    City: "Nongstoin",
    State: "Meghalaya",
  },
  {
    City: "Noorpur",
    State: "Uttar Pradesh",
  },
  {
    City: "North Lakhimpur",
    State: "Assam",
  },
  {
    City: "Nowgong",
    State: "Madhya Pradesh",
  },
  {
    City: "Nowrozabad Khodargama",
    State: "Madhya Pradesh",
  },
  {
    City: "Nuzvid",
    State: "Andhra Pradesh",
  },
  {
    City: "O Valley",
    State: "Tamil Nadu",
  },
  {
    City: "Obra",
    State: "Uttar Pradesh",
  },
  {
    City: "Oddanchatram",
    State: "Tamil Nadu",
  },
  {
    City: "Ongole",
    State: "Andhra Pradesh",
  },
  {
    City: "Orai",
    State: "Uttar Pradesh",
  },
  {
    City: "Osmanabad",
    State: "Maharashtra",
  },
  {
    City: "Ottappalam",
    State: "Kerala",
  },
  {
    City: "Ozar",
    State: "Maharashtra",
  },
  {
    City: "Pnpatti",
    State: "Tamil Nadu",
  },
  {
    City: "Pachora",
    State: "Maharashtra",
  },
  {
    City: "Pachore",
    State: "Madhya Pradesh",
  },
  {
    City: "Pacode",
    State: "Tamil Nadu",
  },
  {
    City: "Padmanabhapuram",
    State: "Tamil Nadu",
  },
  {
    City: "Padra",
    State: "Gujarat",
  },
  {
    City: "Padrauna",
    State: "Uttar Pradesh",
  },
  {
    City: "Paithan",
    State: "Maharashtra",
  },
  {
    City: "Pakaur",
    State: "Jharkhand",
  },
  {
    City: "Palacole",
    State: "Andhra Pradesh",
  },
  {
    City: "Palai",
    State: "Kerala",
  },
  {
    City: "Palakkad",
    State: "Kerala",
  },
  {
    City: "Palampur",
    State: "Himachal Pradesh",
  },
  {
    City: "Palani",
    State: "Tamil Nadu",
  },
  {
    City: "Palanpur",
    State: "Gujarat",
  },
  {
    City: "Palasa Kasibugga",
    State: "Andhra Pradesh",
  },
  {
    City: "Palghar",
    State: "Maharashtra",
  },
  {
    City: "Pali",
    State: "Madhya Pradesh",
  },
  {
    City: "Pali",
    State: "Rajasthan",
  },
  {
    City: "Palia Kalan",
    State: "Uttar Pradesh",
  },
  {
    City: "Palitana",
    State: "Gujarat",
  },
  {
    City: "Palladam",
    State: "Tamil Nadu",
  },
  {
    City: "Pallapatti",
    State: "Tamil Nadu",
  },
  {
    City: "Pallikonda",
    State: "Tamil Nadu",
  },
  {
    City: "Palwal",
    State: "Haryana",
  },
  {
    City: "Palwancha",
    State: "Telangana",
  },
  {
    City: "Panagar",
    State: "Madhya Pradesh",
  },
  {
    City: "Panagudi",
    State: "Tamil Nadu",
  },
  {
    City: "Panaji",
    State: "Goa",
  },
  {
    City: "Panamattom",
    State: "Kerala",
  },
  {
    City: "Panchkula",
    State: "Haryana",
  },
  {
    City: "Panchla",
    State: "West Bengal",
  },
  {
    City: "Pandurban Agglomeration",
    State: "West Bengal",
  },
  {
    City: "Pandharkaoda",
    State: "Maharashtra",
  },
  {
    City: "Pandharpur",
    State: "Maharashtra",
  },
  {
    City: "Pandhurna",
    State: "Madhya Pradesh",
  },
  {
    City: "Panipat",
    State: "Haryana",
  },
  {
    City: "Panna",
    State: "Madhya Pradesh",
  },
  {
    City: "Panniyannur",
    State: "Kerala",
  },
  {
    City: "Panruti",
    State: "Tamil Nadu",
  },
  {
    City: "Panvel",
    State: "Maharashtra",
  },
  {
    City: "Pappinisseri",
    State: "Kerala",
  },
  {
    City: "Paradip",
    State: "Odisha",
  },
  {
    City: "Paramakudi",
    State: "Tamil Nadu",
  },
  {
    City: "Parangipettai",
    State: "Tamil Nadu",
  },
  {
    City: "Parasi",
    State: "Uttar Pradesh",
  },
  {
    City: "Paravoor",
    State: "Kerala",
  },
  {
    City: "Parbhani",
    State: "Maharashtra",
  },
  {
    City: "Pardi",
    State: "Gujarat",
  },
  {
    City: "Parlakhemundi",
    State: "Odisha",
  },
  {
    City: "Parli",
    State: "Maharashtra",
  },
  {
    City: "Partur",
    State: "Maharashtra",
  },
  {
    City: "Parvathipuram",
    State: "Andhra Pradesh",
  },
  {
    City: "Pasan",
    State: "Madhya Pradesh",
  },
  {
    City: "Paschim Punropara",
    State: "West Bengal",
  },
  {
    City: "Pasighat",
    State: "Arunachal Pradesh",
  },
  {
    City: "Patan",
    State: "Gujarat",
  },
  {
    City: "Pathanamthitta",
    State: "Kerala",
  },
  {
    City: "Pathankot",
    State: "Punjab",
  },
  {
    City: "Pathardi",
    State: "Maharashtra",
  },
  {
    City: "Pathri",
    State: "Maharashtra",
  },
  {
    City: "Patiala",
    State: "Punjab",
  },
  {
    City: "Patna",
    State: "Bihar",
  },
  {
    City: "Patratu",
    State: "Jharkhand",
  },
  {
    City: "Pattamundai",
    State: "Odisha",
  },
  {
    City: "Patti",
    State: "Punjab",
  },
  {
    City: "Pattran",
    State: "Punjab",
  },
  {
    City: "Pattukkottai",
    State: "Tamil Nadu",
  },
  {
    City: "Patur",
    State: "Maharashtra",
  },
  {
    City: "Pauni",
    State: "Maharashtra",
  },
  {
    City: "Pauri",
    State: "Uttarakhand",
  },
  {
    City: "Pavagada",
    State: "Karnataka",
  },
  {
    City: "Pedana",
    State: "Andhra Pradesh",
  },
  {
    City: "Peddapuram",
    State: "Andhra Pradesh",
  },
  {
    City: "Pehowa",
    State: "Haryana",
  },
  {
    City: "Pen",
    State: "Maharashtra",
  },
  {
    City: "Perambalur",
    State: "Tamil Nadu",
  },
  {
    City: "Peravurani",
    State: "Tamil Nadu",
  },
  {
    City: "Peringathur",
    State: "Kerala",
  },
  {
    City: "Perinthalmanna",
    State: "Kerala",
  },
  {
    City: "Periyakulam",
    State: "Tamil Nadu",
  },
  {
    City: "Periyasemur",
    State: "Tamil Nadu",
  },
  {
    City: "Pernampattu",
    State: "Tamil Nadu",
  },
  {
    City: "Perumbavoor",
    State: "Kerala",
  },
  {
    City: "Petlad",
    State: "Gujarat",
  },
  {
    City: "Phagwara",
    State: "Punjab",
  },
  {
    City: "Phalodi",
    State: "Rajasthan",
  },
  {
    City: "Phaltan",
    State: "Maharashtra",
  },
  {
    City: "Phillaur",
    State: "Punjab",
  },
  {
    City: "Phulabani",
    State: "Odisha",
  },
  {
    City: "Phulera",
    State: "Rajasthan",
  },
  {
    City: "Phulpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Phusro",
    State: "Jharkhand",
  },
  {
    City: "Pihani",
    State: "Uttar Pradesh",
  },
  {
    City: "Pilani",
    State: "Rajasthan",
  },
  {
    City: "Pilibanga",
    State: "Rajasthan",
  },
  {
    City: "Pilibhit",
    State: "Uttar Pradesh",
  },
  {
    City: "Pilkhuwa",
    State: "Uttar Pradesh",
  },
  {
    City: "Pindwara",
    State: "Rajasthan",
  },
  {
    City: "Pinjore",
    State: "Haryana",
  },
  {
    City: "Pipar City",
    State: "Rajasthan",
  },
  {
    City: "Pipariya",
    State: "Madhya Pradesh",
  },
  {
    City: "Piriyapatna",
    State: "Karnataka",
  },
  {
    City: "Piro",
    State: "Bihar",
  },
  {
    City: "Pithampur",
    State: "Madhya Pradesh",
  },
  {
    City: "Pithapuram",
    State: "Andhra Pradesh",
  },
  {
    City: "Pithoragarh",
    State: "Uttarakhand",
  },
  {
    City: "Pollachi",
    State: "Tamil Nadu",
  },
  {
    City: "Polur",
    State: "Tamil Nadu",
  },
  {
    City: "Pondicherry",
    State: "Puducherry",
  },
  {
    City: "Ponnani",
    State: "Kerala",
  },
  {
    City: "Ponneri",
    State: "Tamil Nadu",
  },
  {
    City: "Ponnur",
    State: "Andhra Pradesh",
  },
  {
    City: "Porbandar",
    State: "Gujarat",
  },
  {
    City: "Porsa",
    State: "Madhya Pradesh",
  },
  {
    City: "Port Blair",
    State: "Andaman And Nicobar Islands",
  },
  {
    City: "Powayan",
    State: "Uttar Pradesh",
  },
  {
    City: "Prantij",
    State: "Rajasthan",
  },
  {
    City: "Pratapgarh",
    State: "Rajasthan",
  },
  {
    City: "Pratapgarh",
    State: "Tripura",
  },
  {
    City: "Prithvipur",
    State: "Madhya Pradesh",
  },
  {
    City: "Proddatur",
    State: "Andhra Pradesh",
  },
  {
    City: "Pudukkottai",
    State: "Tamil Nadu",
  },
  {
    City: "Pudupattinam",
    State: "Tamil Nadu",
  },
  {
    City: "Pukhrayan",
    State: "Uttar Pradesh",
  },
  {
    City: "Pulgaon",
    State: "Maharashtra",
  },
  {
    City: "Puliyankudi",
    State: "Tamil Nadu",
  },
  {
    City: "Punalur",
    State: "Kerala",
  },
  {
    City: "Punch",
    State: "Jammu And Kashmir",
  },
  {
    City: "Pune",
    State: "Maharashtra",
  },
  {
    City: "Punganur",
    State: "Andhra Pradesh",
  },
  {
    City: "Punjaipugalur",
    State: "Tamil Nadu",
  },
  {
    City: "Puranpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Puri",
    State: "Odisha",
  },
  {
    City: "Purna",
    State: "Maharashtra",
  },
  {
    City: "Purnia",
    State: "Bihar",
  },
  {
    City: "Purqurban Agglomerationzi",
    State: "Uttar Pradesh",
  },
  {
    City: "Purulia",
    State: "West Bengal",
  },
  {
    City: "Purwa",
    State: "Uttar Pradesh",
  },
  {
    City: "Pusad",
    State: "Maharashtra",
  },
  {
    City: "Puthuppally",
    State: "Kerala",
  },
  {
    City: "Puttur",
    State: "Andhra Pradesh",
  },
  {
    City: "Puttur",
    State: "Karnataka",
  },
  {
    City: "Qadian",
    State: "Punjab",
  },
  {
    City: "Raayachuru",
    State: "Karnataka",
  },
  {
    City: "Rabkavi Banhatti",
    State: "Karnataka",
  },
  {
    City: "Radhanpur",
    State: "Gujarat",
  },
  {
    City: "Rae Bareli",
    State: "Uttar Pradesh",
  },
  {
    City: "Rafiganj",
    State: "Bihar",
  },
  {
    City: "Raghogarhvijaypur",
    State: "Madhya Pradesh",
  },
  {
    City: "Raghunathganj",
    State: "West Bengal",
  },
  {
    City: "Raghunathpur",
    State: "West Bengal",
  },
  {
    City: "Rahatgarh",
    State: "Madhya Pradesh",
  },
  {
    City: "Rahuri",
    State: "Maharashtra",
  },
  {
    City: "Raiganj",
    State: "West Bengal",
  },
  {
    City: "Raigarh",
    State: "Chhattisgarh",
  },
  {
    City: "Raikot",
    State: "Punjab",
  },
  {
    City: "Raipur",
    State: "Chhattisgarh",
  },
  {
    City: "Rairangpur",
    State: "Odisha",
  },
  {
    City: "Raisen",
    State: "Madhya Pradesh",
  },
  {
    City: "Raisinghnagar",
    State: "Rajasthan",
  },
  {
    City: "Rajagangapur",
    State: "Odisha",
  },
  {
    City: "Rajahmundry",
    State: "Andhra Pradesh",
  },
  {
    City: "Rajakhera",
    State: "Rajasthan",
  },
  {
    City: "Rajaldesar",
    State: "Rajasthan",
  },
  {
    City: "Rajam",
    State: "Andhra Pradesh",
  },
  {
    City: "Rajampet",
    State: "Andhra Pradesh",
  },
  {
    City: "Rajapalayam",
    State: "Tamil Nadu",
  },
  {
    City: "Rajauri",
    State: "Jammu And Kashmir",
  },
  {
    City: "Rajgarh",
    State: "Madhya Pradesh",
  },
  {
    City: "Rajgarh Alwar",
    State: "Rajasthan",
  },
  {
    City: "Rajgarh Churu",
    State: "Rajasthan",
  },
  {
    City: "Rajgir",
    State: "Bihar",
  },
  {
    City: "Rajkot",
    State: "Gujarat",
  },
  {
    City: "Rajnandgaon",
    State: "Chhattisgarh",
  },
  {
    City: "Rajpipla",
    State: "Gujarat",
  },
  {
    City: "Rajpura",
    State: "Punjab",
  },
  {
    City: "Rajsamand",
    State: "Rajasthan",
  },
  {
    City: "Rajula",
    State: "Gujarat",
  },
  {
    City: "Rajura",
    State: "Maharashtra",
  },
  {
    City: "Ramachandrapuram",
    State: "Andhra Pradesh",
  },
  {
    City: "Ramagundam",
    State: "Telangana",
  },
  {
    City: "Ramanagaram",
    State: "Karnataka",
  },
  {
    City: "Ramanathapuram",
    State: "Tamil Nadu",
  },
  {
    City: "Ramdurg",
    State: "Karnataka",
  },
  {
    City: "Rameshwaram",
    State: "Tamil Nadu",
  },
  {
    City: "Ramganj Mandi",
    State: "Rajasthan",
  },
  {
    City: "Ramgarh",
    State: "Jharkhand",
  },
  {
    City: "Ramnagar",
    State: "Bihar",
  },
  {
    City: "Ramnagar",
    State: "Uttarakhand",
  },
  {
    City: "Ramngarh",
    State: "Rajasthan",
  },
  {
    City: "Rampur",
    State: "Uttar Pradesh",
  },
  {
    City: "Rampur Maniharan",
    State: "Uttar Pradesh",
  },
  {
    City: "Rampura Phul",
    State: "Punjab",
  },
  {
    City: "Rampurhat",
    State: "West Bengal",
  },
  {
    City: "Ramtek",
    State: "Maharashtra",
  },
  {
    City: "Ranaghat",
    State: "West Bengal",
  },
  {
    City: "Ranavav",
    State: "Gujarat",
  },
  {
    City: "Ranchi",
    State: "Jharkhand",
  },
  {
    City: "Ranebennuru",
    State: "Karnataka",
  },
  {
    City: "Rangia",
    State: "Assam",
  },
  {
    City: "Rania",
    State: "Haryana",
  },
  {
    City: "Ranibennur",
    State: "Karnataka",
  },
  {
    City: "Ranipet",
    State: "Tamil Nadu",
  },
  {
    City: "Rapar",
    State: "Gujarat",
  },
  {
    City: "Rasipuram",
    State: "Tamil Nadu",
  },
  {
    City: "Rasra",
    State: "Uttar Pradesh",
  },
  {
    City: "Ratangarh",
    State: "Rajasthan",
  },
  {
    City: "Rath",
    State: "Uttar Pradesh",
  },
  {
    City: "Ratia",
    State: "Haryana",
  },
  {
    City: "Ratlam",
    State: "Madhya Pradesh",
  },
  {
    City: "Ratnagiri",
    State: "Maharashtra",
  },
  {
    City: "Rau",
    State: "Madhya Pradesh",
  },
  {
    City: "Raurkela",
    State: "Odisha",
  },
  {
    City: "Raver",
    State: "Maharashtra",
  },
  {
    City: "Rawatbhata",
    State: "Rajasthan",
  },
  {
    City: "Rawatsar",
    State: "Rajasthan",
  },
  {
    City: "Raxaul Bazar",
    State: "Bihar",
  },
  {
    City: "Rayachoti",
    State: "Andhra Pradesh",
  },
  {
    City: "Rayadurg",
    State: "Andhra Pradesh",
  },
  {
    City: "Rayagada",
    State: "Odisha",
  },
  {
    City: "Reengus",
    State: "Rajasthan",
  },
  {
    City: "Rehli",
    State: "Madhya Pradesh",
  },
  {
    City: "Renigunta",
    State: "Andhra Pradesh",
  },
  {
    City: "Renukoot",
    State: "Uttar Pradesh",
  },
  {
    City: "Reoti",
    State: "Uttar Pradesh",
  },
  {
    City: "Repalle",
    State: "Andhra Pradesh",
  },
  {
    City: "Revelganj",
    State: "Bihar",
  },
  {
    City: "Rewa",
    State: "Madhya Pradesh",
  },
  {
    City: "Rewari",
    State: "Haryana",
  },
  {
    City: "Rishikesh",
    State: "Uttarakhand",
  },
  {
    City: "Risod",
    State: "Maharashtra",
  },
  {
    City: "Robertsganj",
    State: "Uttar Pradesh",
  },
  {
    City: "Robertson Pet",
    State: "Karnataka",
  },
  {
    City: "Rohtak",
    State: "Haryana",
  },
  {
    City: "Ron",
    State: "Karnataka",
  },
  {
    City: "Roorkee",
    State: "Uttarakhand",
  },
  {
    City: "Rosera",
    State: "Bihar",
  },
  {
    City: "Rudauli",
    State: "Uttar Pradesh",
  },
  {
    City: "Rudrapur",
    State: "Uttar Pradesh",
  },
  {
    City: "Rudrapur",
    State: "Uttarakhand",
  },
  {
    City: "Rupnagar",
    State: "Punjab",
  },
  {
    City: "Surban Agglomerationr",
    State: "Uttar Pradesh",
  },
  {
    City: "Sabalgarh",
    State: "Madhya Pradesh",
  },
  {
    City: "Sadabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Sadalagi",
    State: "Karnataka",
  },
  {
    City: "Sadasivpet",
    State: "Telangana",
  },
  {
    City: "Sadri",
    State: "Rajasthan",
  },
  {
    City: "Sadulpur",
    State: "Rajasthan",
  },
  {
    City: "Sadulshahar",
    State: "Rajasthan",
  },
  {
    City: "Safidon",
    State: "Haryana",
  },
  {
    City: "Safipur",
    State: "Uttar Pradesh",
  },
  {
    City: "Sagar",
    State: "Madhya Pradesh",
  },
  {
    City: "Sagara",
    State: "Karnataka",
  },
  {
    City: "Sagwara",
    State: "Rajasthan",
  },
  {
    City: "Saharanpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Saharsa",
    State: "Bihar",
  },
  {
    City: "Sahaspur",
    State: "Uttar Pradesh",
  },
  {
    City: "Sahaswan",
    State: "Uttar Pradesh",
  },
  {
    City: "Sahawar",
    State: "Uttar Pradesh",
  },
  {
    City: "Sahibganj",
    State: "Jharkhand",
  },
  {
    City: "Sahjanwa",
    State: "Uttar Pradesh",
  },
  {
    City: "Saidpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Saiha",
    State: "Mizoram",
  },
  {
    City: "Sailu",
    State: "Maharashtra",
  },
  {
    City: "Sainthia",
    State: "West Bengal",
  },
  {
    City: "Sakaleshapura",
    State: "Karnataka",
  },
  {
    City: "Sakti",
    State: "Chhattisgarh",
  },
  {
    City: "Salaya",
    State: "Gujarat",
  },
  {
    City: "Salem",
    State: "Tamil Nadu",
  },
  {
    City: "Salur",
    State: "Andhra Pradesh",
  },
  {
    City: "Samalkha",
    State: "Haryana",
  },
  {
    City: "Samalkot",
    State: "Andhra Pradesh",
  },
  {
    City: "Samana",
    State: "Punjab",
  },
  {
    City: "Samastipur",
    State: "Bihar",
  },
  {
    City: "Sambalpur",
    State: "Odisha",
  },
  {
    City: "Sambhal",
    State: "Uttar Pradesh",
  },
  {
    City: "Sambhar",
    State: "Rajasthan",
  },
  {
    City: "Samdhan",
    State: "Uttar Pradesh",
  },
  {
    City: "Samthar",
    State: "Uttar Pradesh",
  },
  {
    City: "Sanand",
    State: "Gujarat",
  },
  {
    City: "Sanawad",
    State: "Madhya Pradesh",
  },
  {
    City: "Sanchore",
    State: "Rajasthan",
  },
  {
    City: "Sandi",
    State: "Uttar Pradesh",
  },
  {
    City: "Sandila",
    State: "Uttar Pradesh",
  },
  {
    City: "Sanduru",
    State: "Karnataka",
  },
  {
    City: "Sangamner",
    State: "Maharashtra",
  },
  {
    City: "Sangareddy",
    State: "Telangana",
  },
  {
    City: "Sangaria",
    State: "Rajasthan",
  },
  {
    City: "Sangli",
    State: "Maharashtra",
  },
  {
    City: "Sangole",
    State: "Maharashtra",
  },
  {
    City: "Sangrur",
    State: "Punjab",
  },
  {
    City: "Sankarankovil",
    State: "Tamil Nadu",
  },
  {
    City: "Sankari",
    State: "Tamil Nadu",
  },
  {
    City: "Sankeshwara",
    State: "Karnataka",
  },
  {
    City: "Santipur",
    State: "West Bengal",
  },
  {
    City: "Sarangpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Sardarshahar",
    State: "Rajasthan",
  },
  {
    City: "Sardhana",
    State: "Uttar Pradesh",
  },
  {
    City: "Sarni",
    State: "Madhya Pradesh",
  },
  {
    City: "Sarsod",
    State: "Haryana",
  },
  {
    City: "Sasaram",
    State: "Bihar",
  },
  {
    City: "Sasvad",
    State: "Maharashtra",
  },
  {
    City: "Satana",
    State: "Maharashtra",
  },
  {
    City: "Satara",
    State: "Maharashtra",
  },
  {
    City: "Sathyamangalam",
    State: "Tamil Nadu",
  },
  {
    City: "Satna",
    State: "Madhya Pradesh",
  },
  {
    City: "Sattenapalle",
    State: "Andhra Pradesh",
  },
  {
    City: "Sattur",
    State: "Tamil Nadu",
  },
  {
    City: "Saunda",
    State: "Jharkhand",
  },
  {
    City: "Saundattiyellamma",
    State: "Karnataka",
  },
  {
    City: "Sausar",
    State: "Madhya Pradesh",
  },
  {
    City: "Savanur",
    State: "Karnataka",
  },
  {
    City: "Savarkundla",
    State: "Gujarat",
  },
  {
    City: "Savner",
    State: "Maharashtra",
  },
  {
    City: "Sawai Madhopur",
    State: "Rajasthan",
  },
  {
    City: "Sawantwadi",
    State: "Maharashtra",
  },
  {
    City: "Sedam",
    State: "Karnataka",
  },
  {
    City: "Sehore",
    State: "Madhya Pradesh",
  },
  {
    City: "Sendhwa",
    State: "Madhya Pradesh",
  },
  {
    City: "Seohara",
    State: "Uttar Pradesh",
  },
  {
    City: "Seoni",
    State: "Madhya Pradesh",
  },
  {
    City: "Seonimalwa",
    State: "Madhya Pradesh",
  },
  {
    City: "Shahabad",
    State: "Karnataka",
  },
  {
    City: "Shahabad Hardoi",
    State: "Uttar Pradesh",
  },
  {
    City: "Shahabad Rampur",
    State: "Uttar Pradesh",
  },
  {
    City: "Shahade",
    State: "Maharashtra",
  },
  {
    City: "Shahbad",
    State: "Haryana",
  },
  {
    City: "Shahdol",
    State: "Madhya Pradesh",
  },
  {
    City: "Shahganj",
    State: "Uttar Pradesh",
  },
  {
    City: "Shahjahanpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Shahpur",
    State: "Karnataka",
  },
  {
    City: "Shahpura",
    State: "Rajasthan",
  },
  {
    City: "Shahpura",
    State: "Rajasthan",
  },
  {
    City: "Shajapur",
    State: "Madhya Pradesh",
  },
  {
    City: "Shamgarh",
    State: "Madhya Pradesh",
  },
  {
    City: "Shamli",
    State: "Uttar Pradesh",
  },
  {
    City: "Shamsabad Agra",
    State: "Uttar Pradesh",
  },
  {
    City: "Shamsabad Farrukhabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Shegaon",
    State: "Maharashtra",
  },
  {
    City: "Sheikhpura",
    State: "Bihar",
  },
  {
    City: "Shendurjana",
    State: "Maharashtra",
  },
  {
    City: "Shenkottai",
    State: "Tamil Nadu",
  },
  {
    City: "Sheoganj",
    State: "Rajasthan",
  },
  {
    City: "Sheohar",
    State: "Bihar",
  },
  {
    City: "Sheopur",
    State: "Madhya Pradesh",
  },
  {
    City: "Sherghati",
    State: "Bihar",
  },
  {
    City: "Sherkot",
    State: "Uttar Pradesh",
  },
  {
    City: "Shiggaon",
    State: "Karnataka",
  },
  {
    City: "Shikaripur",
    State: "Karnataka",
  },
  {
    City: "Shikarpur Bulandshahr",
    State: "Uttar Pradesh",
  },
  {
    City: "Shikohabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Shillong",
    State: "Meghalaya",
  },
  {
    City: "Shimla",
    State: "Himachal Pradesh",
  },
  {
    City: "Shirdi",
    State: "Maharashtra",
  },
  {
    City: "Shirpurwarwade",
    State: "Maharashtra",
  },
  {
    City: "Shirur",
    State: "Maharashtra",
  },
  {
    City: "Shishgarh",
    State: "Uttar Pradesh",
  },
  {
    City: "Shivamogga",
    State: "Karnataka",
  },
  {
    City: "Shivpuri",
    State: "Madhya Pradesh",
  },
  {
    City: "Sholavandan",
    State: "Tamil Nadu",
  },
  {
    City: "Sholingur",
    State: "Tamil Nadu",
  },
  {
    City: "Shoranur",
    State: "Kerala",
  },
  {
    City: "Shrigonda",
    State: "Maharashtra",
  },
  {
    City: "Shrirampur",
    State: "Maharashtra",
  },
  {
    City: "Shrirangapattana",
    State: "Karnataka",
  },
  {
    City: "Shujalpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Siana",
    State: "Uttar Pradesh",
  },
  {
    City: "Sibsagar",
    State: "Assam",
  },
  {
    City: "Siddipet",
    State: "Telangana",
  },
  {
    City: "Sidhi",
    State: "Madhya Pradesh",
  },
  {
    City: "Sidhpur",
    State: "Gujarat",
  },
  {
    City: "Sidlaghatta",
    State: "Karnataka",
  },
  {
    City: "Sihor",
    State: "Gujarat",
  },
  {
    City: "Sihora",
    State: "Madhya Pradesh",
  },
  {
    City: "Sikanderpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Sikandra Rao",
    State: "Uttar Pradesh",
  },
  {
    City: "Sikandrabad",
    State: "Uttar Pradesh",
  },
  {
    City: "Sikar",
    State: "Rajasthan",
  },
  {
    City: "Silao",
    State: "Bihar",
  },
  {
    City: "Silapathar",
    State: "Assam",
  },
  {
    City: "Silchar",
    State: "Assam",
  },
  {
    City: "Siliguri",
    State: "West Bengal",
  },
  {
    City: "Sillod",
    State: "Maharashtra",
  },
  {
    City: "Silvassa",
    State: "Dadra And Nagar Haveli",
  },
  {
    City: "Simdega",
    State: "Jharkhand",
  },
  {
    City: "Sindagi",
    State: "Karnataka",
  },
  {
    City: "Sindhagi",
    State: "Karnataka",
  },
  {
    City: "Sindhnur",
    State: "Karnataka",
  },
  {
    City: "Singrauli",
    State: "Madhya Pradesh",
  },
  {
    City: "Sinnar",
    State: "Maharashtra",
  },
  {
    City: "Sira",
    State: "Karnataka",
  },
  {
    City: "Sircilla",
    State: "Telangana",
  },
  {
    City: "Sirhind Fatehgarh Sahib",
    State: "Punjab",
  },
  {
    City: "Sirkali",
    State: "Tamil Nadu",
  },
  {
    City: "Sirohi",
    State: "Rajasthan",
  },
  {
    City: "Sironj",
    State: "Madhya Pradesh",
  },
  {
    City: "Sirsa",
    State: "Haryana",
  },
  {
    City: "Sirsaganj",
    State: "Uttar Pradesh",
  },
  {
    City: "Sirsi",
    State: "Karnataka",
  },
  {
    City: "Sirsi",
    State: "Uttar Pradesh",
  },
  {
    City: "Siruguppa",
    State: "Karnataka",
  },
  {
    City: "Sitamarhi",
    State: "Bihar",
  },
  {
    City: "Sitapur",
    State: "Uttar Pradesh",
  },
  {
    City: "Sitarganj",
    State: "Uttarakhand",
  },
  {
    City: "Sivaganga",
    State: "Tamil Nadu",
  },
  {
    City: "Sivagiri",
    State: "Tamil Nadu",
  },
  {
    City: "Sivakasi",
    State: "Tamil Nadu",
  },
  {
    City: "Siwan",
    State: "Bihar",
  },
  {
    City: "Sohagpur",
    State: "Madhya Pradesh",
  },
  {
    City: "Sohna",
    State: "Haryana",
  },
  {
    City: "Sojat",
    State: "Rajasthan",
  },
  {
    City: "Solan",
    State: "Himachal Pradesh",
  },
  {
    City: "Solapur",
    State: "Maharashtra",
  },
  {
    City: "Sonamukhi",
    State: "West Bengal",
  },
  {
    City: "Sonepur",
    State: "Bihar",
  },
  {
    City: "Songadh",
    State: "Gujarat",
  },
  {
    City: "Sonipat",
    State: "Haryana",
  },
  {
    City: "Sopore",
    State: "Jammu And Kashmir",
  },
  {
    City: "Soro",
    State: "Odisha",
  },
  {
    City: "Soron",
    State: "Uttar Pradesh",
  },
  {
    City: "Soyagaon",
    State: "Maharashtra",
  },
  {
    City: "Sri Madhopur",
    State: "Rajasthan",
  },
  {
    City: "Srikakulam",
    State: "Andhra Pradesh",
  },
  {
    City: "Srikalahasti",
    State: "Andhra Pradesh",
  },
  {
    City: "Srinagar",
    State: "Jammu And Kashmir",
  },
  {
    City: "Srinagar",
    State: "Uttarakhand",
  },
  {
    City: "Srinivaspur",
    State: "Karnataka",
  },
  {
    City: "Srirampore",
    State: "West Bengal",
  },
  {
    City: "Srisailam Project Right Flank Colony Township",
    State: "Andhra Pradesh",
  },
  {
    City: "Srivilliputhur",
    State: "Tamil Nadu",
  },
  {
    City: "Sugauli",
    State: "Bihar",
  },
  {
    City: "Sujangarh",
    State: "Rajasthan",
  },
  {
    City: "Sujanpur",
    State: "Punjab",
  },
  {
    City: "Sullurpeta",
    State: "Andhra Pradesh",
  },
  {
    City: "Sultanganj",
    State: "Bihar",
  },
  {
    City: "Sultanpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Sumerpur",
    State: "Rajasthan",
  },
  {
    City: "Sumerpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Sunabeda",
    State: "Odisha",
  },
  {
    City: "Sunam",
    State: "Punjab",
  },
  {
    City: "Sundargarh",
    State: "Odisha",
  },
  {
    City: "Sundarnagar",
    State: "Himachal Pradesh",
  },
  {
    City: "Supaul",
    State: "Bihar",
  },
  {
    City: "Surandai",
    State: "Tamil Nadu",
  },
  {
    City: "Surapura",
    State: "Karnataka",
  },
  {
    City: "Surat",
    State: "Gujarat",
  },
  {
    City: "Suratgarh",
    State: "Rajasthan",
  },
  {
    City: "Suri",
    State: "West Bengal",
  },
  {
    City: "Suriyampalayam",
    State: "Tamil Nadu",
  },
  {
    City: "Suryapet",
    State: "Telangana",
  },
  {
    City: "Tadepalligudem",
    State: "Andhra Pradesh",
  },
  {
    City: "Tadpatri",
    State: "Andhra Pradesh",
  },
  {
    City: "Takhatgarh",
    State: "Rajasthan",
  },
  {
    City: "Taki",
    State: "West Bengal",
  },
  {
    City: "Talaja",
    State: "Gujarat",
  },
  {
    City: "Talcher",
    State: "Odisha",
  },
  {
    City: "Talegaon Dabhade",
    State: "Maharashtra",
  },
  {
    City: "Talikota",
    State: "Karnataka",
  },
  {
    City: "Taliparamba",
    State: "Kerala",
  },
  {
    City: "Talode",
    State: "Maharashtra",
  },
  {
    City: "Talwara",
    State: "Punjab",
  },
  {
    City: "Tamluk",
    State: "West Bengal",
  },
  {
    City: "Tanda",
    State: "Uttar Pradesh",
  },
  {
    City: "Tandur",
    State: "Telangana",
  },
  {
    City: "Tanuku",
    State: "Andhra Pradesh",
  },
  {
    City: "Tarakeswar",
    State: "West Bengal",
  },
  {
    City: "Tarana",
    State: "Madhya Pradesh",
  },
  {
    City: "Taranagar",
    State: "Rajasthan",
  },
  {
    City: "Taraori",
    State: "Haryana",
  },
  {
    City: "Tarbha",
    State: "Odisha",
  },
  {
    City: "Tarikere",
    State: "Karnataka",
  },
  {
    City: "Tarn Taran",
    State: "Punjab",
  },
  {
    City: "Tasgaon",
    State: "Maharashtra",
  },
  {
    City: "Tehri",
    State: "Uttarakhand",
  },
  {
    City: "Tekkalakote",
    State: "Karnataka",
  },
  {
    City: "Tenali",
    State: "Andhra Pradesh",
  },
  {
    City: "Tenkasi",
    State: "Tamil Nadu",
  },
  {
    City: "Tenu Damcumkathhara",
    State: "Jharkhand",
  },
  {
    City: "Terdal",
    State: "Karnataka",
  },
  {
    City: "Tezpur",
    State: "Assam",
  },
  {
    City: "Thakurdwara",
    State: "Uttar Pradesh",
  },
  {
    City: "Thammampatti",
    State: "Tamil Nadu",
  },
  {
    City: "Thana Bhawan",
    State: "Uttar Pradesh",
  },
  {
    City: "Thane",
    State: "Maharashtra",
  },
  {
    City: "Thanesar",
    State: "Haryana",
  },
  {
    City: "Thangadh",
    State: "Gujarat",
  },
  {
    City: "Thanjavur",
    State: "Tamil Nadu",
  },
  {
    City: "Tharad",
    State: "Gujarat",
  },
  {
    City: "Tharamangalam",
    State: "Tamil Nadu",
  },
  {
    City: "Tharangambadi",
    State: "Tamil Nadu",
  },
  {
    City: "Theni Allinagaram",
    State: "Tamil Nadu",
  },
  {
    City: "Thirumangalam",
    State: "Tamil Nadu",
  },
  {
    City: "Thirupuvanam",
    State: "Tamil Nadu",
  },
  {
    City: "Thiruthuraipoondi",
    State: "Tamil Nadu",
  },
  {
    City: "Thiruvalla",
    State: "Kerala",
  },
  {
    City: "Thiruvallur",
    State: "Tamil Nadu",
  },
  {
    City: "Thiruvananthapuram",
    State: "Kerala",
  },
  {
    City: "Thiruvarur",
    State: "Tamil Nadu",
  },
  {
    City: "Thodupuzha",
    State: "Kerala",
  },
  {
    City: "Thoubal",
    State: "Manipur",
  },
  {
    City: "Thrissur",
    State: "Kerala",
  },
  {
    City: "Thuraiyur",
    State: "Tamil Nadu",
  },
  {
    City: "Tikamgarh",
    State: "Madhya Pradesh",
  },
  {
    City: "Tilda Newra",
    State: "Chhattisgarh",
  },
  {
    City: "Tilhar",
    State: "Uttar Pradesh",
  },
  {
    City: "Tindivanam",
    State: "Tamil Nadu",
  },
  {
    City: "Tinsukia",
    State: "Assam",
  },
  {
    City: "Tiptur",
    State: "Karnataka",
  },
  {
    City: "Tirora",
    State: "Maharashtra",
  },
  {
    City: "Tiruchendur",
    State: "Tamil Nadu",
  },
  {
    City: "Tiruchengode",
    State: "Tamil Nadu",
  },
  {
    City: "Tiruchirappalli",
    State: "Tamil Nadu",
  },
  {
    City: "Tirukalukundram",
    State: "Tamil Nadu",
  },
  {
    City: "Tirukkoyilur",
    State: "Tamil Nadu",
  },
  {
    City: "Tirunelveli",
    State: "Tamil Nadu",
  },
  {
    City: "Tirupathur",
    State: "Tamil Nadu",
  },
  {
    City: "Tirupathur",
    State: "Tamil Nadu",
  },
  {
    City: "Tirupati",
    State: "Andhra Pradesh",
  },
  {
    City: "Tiruppur",
    State: "Tamil Nadu",
  },
  {
    City: "Tirur",
    State: "Kerala",
  },
  {
    City: "Tiruttani",
    State: "Tamil Nadu",
  },
  {
    City: "Tiruvannamalai",
    State: "Tamil Nadu",
  },
  {
    City: "Tiruvethipuram",
    State: "Tamil Nadu",
  },
  {
    City: "Tiruvuru",
    State: "Andhra Pradesh",
  },
  {
    City: "Tirwaganj",
    State: "Uttar Pradesh",
  },
  {
    City: "Titlagarh",
    State: "Odisha",
  },
  {
    City: "Tittakudi",
    State: "Tamil Nadu",
  },
  {
    City: "Todabhim",
    State: "Rajasthan",
  },
  {
    City: "Todaraisingh",
    State: "Rajasthan",
  },
  {
    City: "Tohana",
    State: "Haryana",
  },
  {
    City: "Tonk",
    State: "Rajasthan",
  },
  {
    City: "Tuensang",
    State: "Nagaland",
  },
  {
    City: "Tuljapur",
    State: "Maharashtra",
  },
  {
    City: "Tulsipur",
    State: "Uttar Pradesh",
  },
  {
    City: "Tumkur",
    State: "Karnataka",
  },
  {
    City: "Tumsar",
    State: "Maharashtra",
  },
  {
    City: "Tundla",
    State: "Uttar Pradesh",
  },
  {
    City: "Tuni",
    State: "Andhra Pradesh",
  },
  {
    City: "Tura",
    State: "Meghalaya",
  },
  {
    City: "Uchgaon",
    State: "Maharashtra",
  },
  {
    City: "Udaipur",
    State: "Rajasthan",
  },
  {
    City: "Udaipur",
    State: "Tripura",
  },
  {
    City: "Udaipurwati",
    State: "Rajasthan",
  },
  {
    City: "Udgir",
    State: "Maharashtra",
  },
  {
    City: "Udhagamandalam",
    State: "Tamil Nadu",
  },
  {
    City: "Udhampur",
    State: "Jammu And Kashmir",
  },
  {
    City: "Udumalaipettai",
    State: "Tamil Nadu",
  },
  {
    City: "Udupi",
    State: "Karnataka",
  },
  {
    City: "Ujhani",
    State: "Uttar Pradesh",
  },
  {
    City: "Ujjain",
    State: "Madhya Pradesh",
  },
  {
    City: "Umarga",
    State: "Maharashtra",
  },
  {
    City: "Umaria",
    State: "Madhya Pradesh",
  },
  {
    City: "Umarkhed",
    State: "Maharashtra",
  },
  {
    City: "Umbergaon",
    State: "Gujarat",
  },
  {
    City: "Umred",
    State: "Maharashtra",
  },
  {
    City: "Umreth",
    State: "Gujarat",
  },
  {
    City: "Una",
    State: "Gujarat",
  },
  {
    City: "Unjha",
    State: "Gujarat",
  },
  {
    City: "Unnamalaikadai",
    State: "Tamil Nadu",
  },
  {
    City: "Unnao",
    State: "Uttar Pradesh",
  },
  {
    City: "Upleta",
    State: "Gujarat",
  },
  {
    City: "Uran",
    State: "Maharashtra",
  },
  {
    City: "Uran Islampur",
    State: "Maharashtra",
  },
  {
    City: "Uravakonda",
    State: "Andhra Pradesh",
  },
  {
    City: "Urmar Tanda",
    State: "Punjab",
  },
  {
    City: "Usilampatti",
    State: "Tamil Nadu",
  },
  {
    City: "Uthamapalayam",
    State: "Tamil Nadu",
  },
  {
    City: "Uthiramerur",
    State: "Tamil Nadu",
  },
  {
    City: "Utraula",
    State: "Uttar Pradesh",
  },
  {
    City: "Vadakkuvalliyur",
    State: "Tamil Nadu",
  },
  {
    City: "Vadalur",
    State: "Tamil Nadu",
  },
  {
    City: "Vadgaon Kasba",
    State: "Maharashtra",
  },
  {
    City: "Vadipatti",
    State: "Tamil Nadu",
  },
  {
    City: "Vadnagar",
    State: "Gujarat",
  },
  {
    City: "Vadodara",
    State: "Gujarat",
  },
  {
    City: "Vaijapur",
    State: "Maharashtra",
  },
  {
    City: "Vaikom",
    State: "Kerala",
  },
  {
    City: "Valparai",
    State: "Tamil Nadu",
  },
  {
    City: "Valsad",
    State: "Gujarat",
  },
  {
    City: "Vandavasi",
    State: "Tamil Nadu",
  },
  {
    City: "Vaniyambadi",
    State: "Tamil Nadu",
  },
  {
    City: "Vapi",
    State: "Gujarat",
  },
  {
    City: "Vapi",
    State: "Gujarat",
  },
  {
    City: "Varanasi",
    State: "Uttar Pradesh",
  },
  {
    City: "Varkala",
    State: "Kerala",
  },
  {
    City: "Vasaivirar",
    State: "Maharashtra",
  },
  {
    City: "Vatakara",
    State: "Kerala",
  },
  {
    City: "Vedaranyam",
    State: "Tamil Nadu",
  },
  {
    City: "Vellakoil",
    State: "Tamil Nadu",
  },
  {
    City: "Vellore",
    State: "Tamil Nadu",
  },
  {
    City: "Venkatagiri",
    State: "Andhra Pradesh",
  },
  {
    City: "Veraval",
    State: "Gujarat",
  },
  {
    City: "Vidisha",
    State: "Madhya Pradesh",
  },
  {
    City: "Vijainagar Ajmer",
    State: "Rajasthan",
  },
  {
    City: "Vijapur",
    State: "Gujarat",
  },
  {
    City: "Vijayapura",
    State: "Karnataka",
  },
  {
    City: "Vijayawada",
    State: "Andhra Pradesh",
  },
  {
    City: "Vijaypur",
    State: "Madhya Pradesh",
  },
  {
    City: "Vikarabad",
    State: "Telangana",
  },
  {
    City: "Vikramasingapuram",
    State: "Tamil Nadu",
  },
  {
    City: "Viluppuram",
    State: "Tamil Nadu",
  },
  {
    City: "Vinukonda",
    State: "Andhra Pradesh",
  },
  {
    City: "Viramgam",
    State: "Gujarat",
  },
  {
    City: "Virudhachalam",
    State: "Tamil Nadu",
  },
  {
    City: "Virudhunagar",
    State: "Tamil Nadu",
  },
  {
    City: "Visakhapatnam",
    State: "Andhra Pradesh",
  },
  {
    City: "Visnagar",
    State: "Gujarat",
  },
  {
    City: "Viswanatham",
    State: "Tamil Nadu",
  },
  {
    City: "Vita",
    State: "Maharashtra",
  },
  {
    City: "Vizianagaram",
    State: "Andhra Pradesh",
  },
  {
    City: "Vrindavan",
    State: "Uttar Pradesh",
  },
  {
    City: "Vyara",
    State: "Gujarat",
  },
  {
    City: "Wadgaon Road",
    State: "Maharashtra",
  },
  {
    City: "Wadhwan",
    State: "Gujarat",
  },
  {
    City: "Wadi",
    State: "Karnataka",
  },
  {
    City: "Wai",
    State: "Maharashtra",
  },
  {
    City: "Wanaparthy",
    State: "Telangana",
  },
  {
    City: "Wani",
    State: "Maharashtra",
  },
  {
    City: "Wankaner",
    State: "Gujarat",
  },
  {
    City: "Wara Seoni",
    State: "Madhya Pradesh",
  },
  {
    City: "Warangal",
    State: "Telangana",
  },
  {
    City: "Wardha",
    State: "Maharashtra",
  },
  {
    City: "Warhapur",
    State: "Uttar Pradesh",
  },
  {
    City: "Warisaliganj",
    State: "Bihar",
  },
  {
    City: "Warora",
    State: "Maharashtra",
  },
  {
    City: "Warud",
    State: "Maharashtra",
  },
  {
    City: "Washim",
    State: "Maharashtra",
  },
  {
    City: "Wokha",
    State: "Nagaland",
  },
  {
    City: "Yadgir",
    State: "Karnataka",
  },
  {
    City: "Yamunanagar",
    State: "Haryana",
  },
  {
    City: "Yanam",
    State: "Puducherry",
  },
  {
    City: "Yavatmal",
    State: "Maharashtra",
  },
  {
    City: "Yawal",
    State: "Maharashtra",
  },
  {
    City: "Yellandu",
    State: "Telangana",
  },
  {
    City: "Yemmiganur",
    State: "Andhra Pradesh",
  },
  {
    City: "Yerraguntla",
    State: "Andhra Pradesh",
  },
  {
    City: "Yevla",
    State: "Maharashtra",
  },
  {
    City: "Zaidpur",
    State: "Uttar Pradesh",
  },
  {
    City: "Zamania",
    State: "Uttar Pradesh",
  },
  {
    City: "Zira",
    State: "Punjab",
  },
  {
    City: "Zirakpur",
    State: "Punjab",
  },
  {
    City: "Zunheboto",
    State: "Nagaland",
  },
];

const stateOptions = [
  {
    value: "Maharashtra",
    label: "Maharashtra",
  },
  {
    value: "Uttar Pradesh",
    label: "Uttar Pradesh",
  },
  {
    value: "Gujarat",
    label: "Gujarat",
  },
  {
    value: "Telangana",
    label: "Telangana",
  },
  {
    value: "Jharkhand",
    label: "Jharkhand",
  },
  {
    value: "Andhra Pradesh",
    label: "Andhra Pradesh",
  },
  {
    value: "Kerala",
    label: "Kerala",
  },
  {
    value: "West Bengal",
    label: "West Bengal",
  },
  {
    value: "Karnataka",
    label: "Karnataka",
  },
  {
    value: "Tripura",
    label: "Tripura",
  },
  {
    value: "Mizoram",
    label: "Mizoram",
  },
  {
    value: "Rajasthan",
    label: "Rajasthan",
  },
  {
    value: "Madhya Pradesh",
    label: "Madhya Pradesh",
  },
  {
    value: "Chhattisgarh",
    label: "Chhattisgarh",
  },
  {
    value: "Punjab",
    label: "Punjab",
  },
  {
    value: "Jammu And Kashmir",
    label: "Jammu And Kashmir",
  },
  {
    value: "Tamil Nadu",
    label: "Tamil Nadu",
  },
  {
    value: "Bihar",
    label: "Bihar",
  },
  {
    value: "Uttarakhand",
    label: "Uttarakhand",
  },
  {
    value: "Haryana",
    label: "Haryana",
  },
  {
    value: "Odisha",
    label: "Odisha",
  },
  {
    value: "Assam",
    label: "Assam",
  },
  {
    value: "Chandigarh",
    label: "Chandigarh",
  },
  {
    value: "Delhi",
    label: "Delhi",
  },
  {
    value: "Nagaland",
    label: "Nagaland",
  },
  {
    value: "Manipur",
    label: "Manipur",
  },
  {
    value: "Puducherry",
    label: "Puducherry",
  },
  {
    value: "Himachal Pradesh",
    label: "Himachal Pradesh",
  },
  {
    value: "Goa",
    label: "Goa",
  },
  {
    value: "Karnatka",
    label: "Karnatka",
  },
  {
    value: "Arunachal Pradesh",
    label: "Arunachal Pradesh",
  },
  {
    value: "Meghalaya",
    label: "Meghalaya",
  },
  {
    value: "Andaman And Nicobar Islands",
    label: "Andaman And Nicobar Islands",
  },
  {
    value: "Dadra And Nagar Haveli",
    label: "Dadra And Nagar Haveli",
  },
];

export default {
  cityList: cityOptions,
  stateList: stateOptions,
  cityStateData: cityState,
};
