
function submit() {
    $('#submit').click(function () {
        console.log('searching database..')
        $('table').empty()
        $('table').append(`
        <tr>
            <th>ProductID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
        </tr>`)
        const productid = $('#searchbox').val()
        $('#searchbox').val('')
        const data = `{"productid":"${productid}"}`

        $.ajax({
            url: 'http://localhost:9999/search-id',
            type: 'POST',
            data: data,
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            success: function (data, textStatus, xhr) {
                result = data.result

                text = ''
                for (let i = 0; i < result.length; i++) {

                    text += `
                    <tr>
                        <td>${result[i].id}</td>
                        <td>${result[i].name}</td>
                        <td>${result[i].stock}</td>
                        <td>$${result[i].price}</td>
                    </tr>`

                }

                $('table').append(text)

                $('table').css('display', 'table')
            },
            error: function (xhr, textStatus, errorThrown) {
                // productid not found
                message = JSON.parse(xhr.responseText).errorThrown
                $('#msg').text(message)
                setTimeout(function () { $("#msg").text(''); }, 3000);
                $('table').css('display', 'none')
            }
        })

        return false


    })
}



$(document).ready(function () {
    submit();
})