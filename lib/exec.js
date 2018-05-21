var Promise = require('bluebird')

module.exports = function exec(params){

    if(!params.deviceType.identifier) return Promise.reject('Not address found !')
    
    //Get address of device
    var address = params.deviceType.identifier;
    //Get state of deviceType
    var state = params.state.value
    var req;

    //If he has a command in the devicetype's identifier
    if(params.deviceType.deviceTypeIdentifier) {
        var command = params.deviceType.deviceTypeIdentifier
        //Building the query with command
        req = address + command + "&state=" + state
    }else{
        //Building the query without command
        req = address + "state=" + state
    }

    sails.log.info(`Sending request : ${req}`)

    //Send request
    gladys.utils.request(req)
        .then(r => sails.log.info(r))
        .catch(e => sails.log.error(e))
    
};
