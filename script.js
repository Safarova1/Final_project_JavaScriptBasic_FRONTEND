let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
]




let buyerbasket = []



//1 ve 6 gormek +sort
class ShowProduct {
    constructor(filter) {
        this.filter = filter
    }

    showProduct(massiv) {
        massiv.forEach((item) => {
            console.log(item.store_name)
            if (this.filter === 'artan') {
                item.products.sort((a, b) => a['product_price'] - b['product_price'])
            } else if (this.filter === 'azalan') {
                item.products.sort((a, b) => b['product_price'] - a['product_price'])
            }
            item.products.forEach((element) => {
                console.log(element['product_name'], element['product_description'], element['product_price'])
            })
        })
    }
}




//2 tapmaq
class FindProduct {
    constructor(mal) {
        this.mal = mal
    }
    findProduct(massiv) {
        massiv.forEach((item) => {
            item.products.forEach((element) => {
                if (element['product_name'] === this.mal) {
                    console.log(item.store_name)
                    console.log(element['product_name'], element['product_description'], element['product_price'])
                    alert(item.store_name + ' ->  ' + element.product_name + ' - ' + element.product_description + ' - ' + element.product_price)
                } else {
                    alert('secdiyiniz product haqqinda hec bir melumat tapilmadi')
                }
            })
        })

    }
}




//3 silmek
class DeleteProduct {
    constructor(mal) {
        this.mal = mal
        this.index = 0
    }
    deleteProduct(massiv) {
        massiv.forEach((item) => {
            item.products.forEach((element) => {
                if (element['product_name'] === this.mal) {
                    this.index = item.products.indexOf(element)
                    item.products.splice(this.index, 1)
                    alert('secdiyiniz product silindi')
                } else {
                    alert('silmek istediyiniz product tapilmadi')
                }
            })
        })
    }
}




//4 deyismek
class ChangeProduct {
    constructor(mal, price) {
        this.mal = mal
        this.price = Number(price)
    }
    changeProduct(massiv) {
        massiv.forEach((item) => {
            item.products.forEach((element) => {
                if (element['product_name'] === this.mal) {
                    element['product_price'] = this.price
                    alert('productun qiymeti deyisildi')
                } else {
                    alert('qiymetin deyismek istediyiniz product tapilmadi')
                }
            })
        })
    }
}





//5 elave etmek - admin
class AddProduct {
    constructor(store_name, product_name, product_description, product_price) {
        this.store_name = store_name
        this.product_name = product_name
        this.product_description = product_description
        this.product_price = product_price
        this.mal = {}
    }

    addProduct(massiv) {
        massiv.forEach((item) => {
            if (item.store_name === this.store_name) {
                this.mal['product_name'] = this.product_name
                this.mal['product_description'] = this.product_description
                this.mal['product_price'] = this.product_price
                item.products.push(this.mal)
                alert('yeni product elave olundu')
            } else {
                alert('elave etmek istediyiniz maqazin tapilmadi')
            }
        })
    }
}




//6- sebete elave etmek - alici
class AddBasketProduct {
    constructor(mal) {
        this.mal = mal
        this.maqazin = {}
    }
    addBasketProduct(massiv) {
        massiv.forEach((item) => {
            item.products.forEach((element) => {
                if (element['product_name'] === this.mal) {
                    this.maqazin['product_name'] = element['product_name']
                    this.maqazin['product_description'] = element['product_description']
                    this.maqazin['product_price'] = element['product_price']
                    buyerbasket.push(this.maqazin)
                }
            })
        })
    }
}







while (true) {
    let adminvsalici = prompt("admin yoxsa alici oldugunuzu qeyd edin zehmet olmasa \n cixmaq ucun - end")

    if (adminvsalici === 'admin') {
        console.log(adminvsalici)
        while (true) {
            let request = prompt(`
                Mallarin siyahisini gormek ucun - show 
                Mali tapmaq ucun - find
                Mali silmek ucun - delete
                Malin qiymetini deyismek ucun - change
                Malin elave edilmesi ucun - add
                cixmaq ucun - end
                `)


            if (request === 'show') {
                let filter = prompt('malları qiyməti artan/azalan/oldugu qaydada göstər')
                let show = new ShowProduct(filter)
                show.showProduct(shopGoods)

            } else if (request === 'find') {
                let mal = prompt('gormek istediyiniz productun adini qeyd edin')
                let find = new FindProduct(mal)
                find.findProduct(shopGoods)

            } else if (request === 'delete') {
                let mal = prompt('silmek istediyiniz productun adini qeyd edin')
                let del = new DeleteProduct(mal)
                del.deleteProduct(shopGoods)

            } else if (request === 'change') {
                let mal = prompt('qiymetini deyismek istediyiniz productun adini qeyd edin')
                let price = prompt('teze qiymeti qeyd edin')
                let change = new ChangeProduct(mal, price)
                change.changeProduct(shopGoods)

            } else if (request === 'add') {
                let inputstore_name = prompt("product elave etmek istediyiniz maqazinin adini qeyd edin")

                let inputproduct_name = prompt("elave etmek istediyiniz product_name qeyd edin")
                let inputproduct_description = prompt("elave etmek istediyiniz product_description qeyd edin")
                let inputproduct_price = Number(prompt("elave etmek istediyiniz product_price qeyd edin"))

                let add = new AddProduct(inputstore_name, inputproduct_name, inputproduct_description, inputproduct_price)
                add.addProduct(shopGoods)


            } else if (request === 'end') {
                alert("admin seciminden cixdiniz")
                break

            } else {
                alert('duzgun secim edin')
            }


        }












    } else if (adminvsalici === 'alici') {
        console.log(adminvsalici)

        while (true) {
            let request = prompt(`
                    Mallarin siyahisini gormek ucun - show
                    Mali tapmaq ucun - find
                    Istediyiniz mali sebete elave etmek ucun - add basket
                    cixmaq ucun - end
                    `)


            if (request === 'show') {
                let filter = prompt('malları qiyməti artan/azalan/oldugu qaydada göstər')
                let show = new ShowProduct(filter)
                show.showProduct(shopGoods)

            } else if (request === 'find') {
                let mal = prompt('gormek istediyiniz productun adini qeyd edin')
                let find = new FindProduct(mal)
                find.findProduct(shopGoods)

            } else if (request === 'add basket') {
                while (true) {
                    let mal = prompt('sebete elave etmek istediyiniz productun adini qeyd edin - end ')
                    if (mal === 'end') {
                        let qiymet = 0

                        buyerbasket.forEach((item) => {
                            console.log(item['product_name'], item['product_description'], item['product_price'])
                            qiymet += item['product_price']
                        })

                        console.log(`umumi qiymet ${qiymet}`)
                        alert(`umumi qiymet ${qiymet}`)

                        break
                    } else {
                        let addBasket = new AddBasketProduct(mal)
                        addBasket.addBasketProduct(shopGoods)
                    }
                }
                
            }else if (request === 'end') {
                alert("alici seciminden cixdiniz")
                break

            } else {
                alert('duzgun secim edin')
            }
        }




    } else if (adminvsalici === 'end') {
        alert("sistemden cixdiniz")
        break

    } else {
        alert('duzgun qeyd edilmeyib')

    }

}