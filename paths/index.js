let data = {
    users: [
        {
            name: "John",
            address: {
                city: "GoodTown",
                country: "Amazing States of Unity"
            }
        },
        {
            name: "Marry",
            address: {
                city: "JobTown",
                country: "Employment Emirates"
            }
        }
    ]
}

let path = "users.0.address.city"

function getValue(data, path) {


    // ИЗ ЗА КУСКА КОДА НИЖЕ Я ПОТРАТИЛ 2 ЧАСА ПОТОМУ ЧТО ПОЛУЧАЛ UNDEFINED И НЕ МОГ ПОНЯТЬ КАКОГО ХРЕНА

    // let rightPath = [];
    // let regex = /\d/g;
    // let spl = path.split('.')
    // for (let i = 0; i < spl.length; i++) {
    //     if (regex.test(spl[i])) {
    //         spl[i] = `[${spl[i]}].`
    //     } else {
    //         if (i === spl.length - 1) {
    //             spl[i] = `${spl[i]}`
    //         } else {
    //             spl[i] = `${spl[i]}.`
    //         }
    //     }
    //     rightPath.push(spl[i])
    // }

    // ОКАЗАЛОСЬ ВСЁ КУДА ПРОЩЕ С ОДНОЙ СТОРОНЫ НО СЛОЖНЕЙ С ДРУГОЙ

    let segments = path.split('.');   /*РАЗБИВАЕМ СТРОКУ ПО СЛОВУ НА КАЖДОЙ ТОЧКЕ*/
    let step = data[segments[0]] /*ПЕРВАЯ СТУПЕНЬ Т.Е. data.users*/

    // С ЭТОЙ ЧАСТЬЮ ТОЖЕ ВОЗНИКЛИ ПРОБЛЕМЫ И Я СОВРУ ЕСЛИ СКАЖУ ЧТО НЕ ПОДГЛЯДЫВАЛ
    if (segments[1]) {

        segments.splice(0, 1); /* УДАЛЯЕМ И ПОДСТАВЛЯЕМ СЛЕДУЮЩИЙ*/
        let dotPath = segments.join('.'); /* ПОДСТАВЛЯЕМ ТОЧКУ */
        return getValue(step, dotPath); /* ВЫЗЫВАЕМ ФУНКЦИЮ И ВОЗВРАЩАЕМ*/
    }
    console.log(step)
}

getValue(data, path)