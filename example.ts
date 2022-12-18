import {JSONQuery} from "./index"
const people = [
    {
        "fullName": "Bessie Smith",
        "address": {
            "street": "27640 Glen Burgs",
            "city": "Brades"
        },
        "email": "Bessie_Smith@yahoo.com",
        "phone": {
            "home": "600-933-0626",
            "office": "774-586-4275"
        },
        "jobInfo": {
            "basic": 10384,
            "department": "Kids"
        }
    },
    {
        "fullName": "Maria Russel",
        "address": {
            "street": "8217 Krajcik Throughway",
            "city": "Lospalos"
        },
        "email": "Maria_Russel93@hotmail.com",
        "phone": {
            "home": "212-868-6900",
            "office": "061-060-8362"
        },
        "jobInfo": {
            "basic": 2385,
            "department": "Beauty"
        }
    },
    {
        "fullName": "Jonathan Koss",
        "address": {
            "street": "52449 Elinore Oval",
            "city": "Becicherecu Mic"
        },
        "email": "Jonathan_Koss@hotmail.com",
        "phone": {
            "home": "595-125-5573",
            "office": "361-043-8944"
        },
        "jobInfo": {
            "basic": 3423,
            "department": "Sports"
        }
    },
    {
        "fullName": "Ivan McDermott",
        "address": {
            "street": "632 Gabriella Corners",
            "city": "Bajadero"
        },
        "email": "Ivan8@hotmail.com",
        "phone": {
            "home": "474-381-5468",
            "office": "113-620-8681"
        },
        "jobInfo": {
            "basic": 2329,
            "department": "Sports"
        }
    },
    {
        "fullName": "Wilbert Schmitt",
        "address": {
            "street": "7524 Eliezer Village",
            "city": "Hongseong"
        },
        "email": "Wilbert.Schmitt51@hotmail.com",
        "phone": {
            "home": "239-644-0940",
            "office": "826-517-5449"
        },
        "jobInfo": {
            "basic": 21204,
            "department": "Kids"
        }
    },
    {
        "fullName": "Teri Schamberger",
        "address": {
            "street": "72716 Marquise Falls",
            "city": "Cruz Bay"
        },
        "email": "Teri_Schamberger58@gmail.com",
        "phone": {
            "home": "477-684-6061",
            "office": "547-193-1703"
        },
        "jobInfo": {
            "basic": 1146,
            "department": "Garden"
        }
    },
    {
        "fullName": "Catherine Watsica",
        "address": {
            "street": "42987 Greenholt Neck",
            "city": "Barber"
        },
        "email": "Catherine30@yahoo.com",
        "phone": {
            "home": "318-025-1780",
            "office": "799-976-0109"
        },
        "jobInfo": {
            "basic": 10103,
            "department": "Automotive"
        }
    },
    {
        "fullName": "Leslie Schmitt",
        "address": {
            "street": "82783 Leannon Hills",
            "city": "Burao"
        },
        "email": "Leslie.Schmitt1@yahoo.com",
        "phone": {
            "home": "570-107-6840",
            "office": "363-354-5809"
        },
        "jobInfo": {
            "basic": 3753,
            "department": "Toys"
        }
    }
]
const qObj = new JSONQuery(people)
console.dir(
    qObj
    .select(['fullName', 'address', 'email', 'phone', 'jobInfo'])
    .nestedWhere("jobInfo.department", "==", "Sports")
    .orderBy("fullName", "desc")
    .get()
)

