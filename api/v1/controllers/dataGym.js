const Data = [
    {
        name: "Iron Paradise",
        address: "123 Main St, Tel Aviv",
        location: {
            type: "Point",
            coordinates: [34.7818, 32.0853] // [longitude, latitude]
        },
        picUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9X_fP_V02QTVlnVrij8J_ONGsnZS_e9dbA&s"
    },
    {
        name: "Muscle Factory",
        address: "456 High St, Tel Aviv",
        location: {
            type: "Point",
            coordinates: [34.7890, 32.0800]
        },
        picUrl:"https://goof1.co.il/wp-content/uploads/2022/07/DSC08310-scaled-e1675594393844.jpg"

    },
    {
        name: "Fitness Zone",
        address: "789 Broad St, Tel Aviv",
        location: {
            type: "Point",
            coordinates: [34.7922, 32.0700]
        },
        picUrl:"https://tevabari.co.il/images/article/new_ilan/%D7%9E%D7%A8%D7%9B%D7%96_%D7%94%D7%9B%D7%95%D7%A9%D7%A8_%D7%95%D7%94%D7%A1%D7%A4%D7%95%D7%A8%D7%98/shutterstock_609103169.jpg"

    },
    {
        name: "Powerhouse Gym",
        address: "321 Low St, Tel Aviv",
        location: {
            type: "Point",
            coordinates: [34.7750, 32.0650]
        },
        picUrl:"https://goof1.co.il/wp-content/uploads/2022/07/DSC08310-scaled-e1675594393844.jpg"

    },
    {
        name: "Energy Hub",
        address: "654 Park St, Tel Aviv",
        location: {
            type: "Point",
            coordinates: [34.7688, 32.0580]
        },
        picUrl:"https://goof1.co.il/wp-content/uploads/2022/07/DSC08310-scaled-e1675594393844.jpg"

    }
];

module.exports = {


    getData: (req, res) => {
        return res.status(200).json({ Data });
    }


};