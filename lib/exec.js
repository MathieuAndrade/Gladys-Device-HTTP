


module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            newState = state.on();
                        
        } else {
            newState = state.off();
        }  
      break;
    }   
};
