
//preferred
angular
.module('app')
.component('tmAdder', {
  templateUrl: 'adder.html',
  controller: AdderController
}

HeroDetailController.$inject = ['adderService']
function AdderController(adderService){
  vm.add = adderService.add;
  vm.first = 0;
  vm.second = 0;


}
