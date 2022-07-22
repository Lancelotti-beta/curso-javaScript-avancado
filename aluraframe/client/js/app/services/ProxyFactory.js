export default class ProxyFactory {
    static cria(object, prop, action) {
        return new Proxy(object, {
            get(target, props, recevier) {
                if((prop.includes(props)) && (ProxyFactory._ehFuncao(target[props]))) {
                    return function() {
                        Reflect.apply(target[props], target, arguments)
                        return action(target)
                    }
                }
        
                return Reflect.get(target, props, recevier)
            },
            set(target, props, value, recevier) {
                if(prop.includes(props)){
                    target[props] = value
                    action(target)
                }
                return Reflect.set(target, props, value, recevier)
            }
        })
    }

    static _ehFuncao(funcao) {
        return  typeof(funcao) === typeof(Function)
    }
}