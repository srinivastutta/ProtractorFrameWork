class Car{

setCarName(name){
    this.name = name;
}
startEngine(){
    console.log('Engine Started for '+this.name);
}
StopEngine(){
    console.log('Engine Stopped for '+this.name);
}
};
module.exports = new Car();

