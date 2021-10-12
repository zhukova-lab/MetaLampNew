import * as $ from 'jquery'
function createAnalytics(): object {
    let counter = 0
    let destroyed:boolean = false

    const listener = (): number => counter++

    $(document).on('click',listener)

    return {
        destroy() {
            $(document).off('clack',listener)
            destroyed = true
        },

        getClicks() {
            if(destroyed){
            return `Analytics  destroyed. Total clicks=${counter}`
        }
        return counter
        }
    }
}

window['analytics'] = createAnalytics()