import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class NewOrderComponent extends Component {

    @action
    calculate(kjhjgjg) {
    var peso = document.getElementById('peso').value;
    var largura = document.getElementById('largura').value;
    var altura = document.getElementById('altura').value;
    var profundidade = document.getElementById('profundidade').value;
    var quantidade = document.getElementById('quantidade').value;
    var CEP = document.getElementById('CEP').value;

    if (
        peso === '' ||
        peso === 0 ||
        peso <= 0 ||
        largura === '' ||
        largura === 0 ||
        largura <= 0 ||
        altura === '' ||
        altura === 0 ||
        altura <= 0 ||
        profundidade === '' ||
        profundidade === 0 ||
        profundidade <= 0 ||
        quantidade === '' ||
        quantidade === 0 ||
        quantidade <= 0 ||
        CEP === '' ||
        CEP === 0 ||
        CEP <= 0
    ) {
        alert('Por favor, coloque um valor válido!');
        return;
    }
    else{
        var pesototal = peso * quantidade * 0.001 * 0.91;
        var picking = 0.28 * quantidade;
        var armz = largura*altura*profundidade*0.000001*49.98*quantidade;
        var packing = 5.72;
    }
    }
}

// items = A([]);
// add(item) {
//   this.items.pushObject(item);
// }