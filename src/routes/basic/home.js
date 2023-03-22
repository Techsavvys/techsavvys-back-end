module.exports = async function(app){
    app.get('/', async function(req, res) {
        res.json({success: true, data: "This endpoint is working!"});
    });
}