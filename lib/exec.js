module.exports = function exec(params){
    
    //Get address
    var address = params.deviceType.identifier;
    var state = params.state.value
    var req;

    //If he has a command in the devicetype's identifier
    if(params.deviceType.deviceTypeIdentifier) {
        var command = params.deviceType.deviceTypeIdentifier
        //Building the query with command
        req = address + command + "&state=" + state
    }else{
        //Building the query without command
        req = address + "&state=" + state
    }

    sails.log.info(`Sending request : ${req}`)

    gladys.utils.request(req)
        .then(r => sails.log.info(r))
        .catch(e => sails.log.error(e))
    
};
