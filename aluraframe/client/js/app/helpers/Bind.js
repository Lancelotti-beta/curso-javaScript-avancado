import ProxyFactory from "../services/ProxyFactory.js";

export default class Bind {
    constructor(model, view, props) {
        let proxy = ProxyFactory.cria(model, props, model => 
            view.renderiza(model)
        )

        view.renderiza(model)
        return proxy
    }
}