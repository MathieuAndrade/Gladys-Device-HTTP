
module.exports = function exec(params){
    var newState;
    
    switch(params.deviceType.type){
      case 'binary': 
        if(params.state.value === 1){
            gladys.utils.request('http://192.168.1.27:4200/?r=2').then((response) => { console.log(response);}).catch((err) => {  console.log(err);});
            console.log(params);
        } else {
            gladys.utils.request('http://192.168.1.27:4200/?r=2').then((response) => { console.log(response);}).catch((err) => {  console.log(err);});
            console.log(params);
        }  
      break;
    }   
};
