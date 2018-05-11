module.exports={
    getAllHouses:(req, res) => {
        req.app.get('db').getAllHouses().then(houses => {res.status(200).send(houses)}).catch(err=> console.log(err))
    },

    addHouses:(req, res) => {
        let {propertyname, address, city, state, zip} = req.body;
        req.app.get('db').addHouses([propertyname, address, city, state, zip]).then(ok => {
            res.sendStatus(200)
        })
    },
    deleteHome:(req, res)=>{
        const {params} = req;
        req.app.get('db').deleteHouse([params.id]).then(()=> res.status(200).send()).catch(()=>res.status(500).send())
}

    
}