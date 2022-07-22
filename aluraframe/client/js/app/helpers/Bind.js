import ProxyFactory from "../services/ProxyFactory";

export default class Bind {
    constructor(objeto, view, props) {
        let proxy = new ProxyFactory.cria(objeto, props, model => 
            view.renderiza(model)
        )

        view.renderiza(objeto)
        return proxy
    }
}