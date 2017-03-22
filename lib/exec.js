


module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            newState = state.on();
            gladys.utils.request('http://192.168.1.27:4200/?r=2').then((response) => { console.log(response);}).catch((err) => {  console.log(err);});
            
        } else {
            newState = state.off();
            gladys.utils.request('http://192.168.1.27:4200/?r=2').then((response) => { console.log(response);}).catch((err) => {  console.log(err);});
        }  
      break;
    }   
};
