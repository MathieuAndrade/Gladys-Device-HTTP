module.exports = function exec(params){
    
    //Get address
    var address = params.deviceType.identifier;
    var state = params.state.value
    var req;

    //If he has a command in the devicetype's identifier
    if(param.deviceType.deviceTypeIdentifier) {
        var command = param.deviceType.deviceTypeIdentifier
        //Building the query with command
        req = address + command + state
    }else{
        //Building the query without command
        req = address + state
    }

    sails.log.info("Sending request:" + req)

    gladys.utils.request(req);
    
};
