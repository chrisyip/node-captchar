# Captchar

Generate captcha image. Written in Node.js.

## Installation

Node-captchar requires [canvas](https://www.npmjs.org/package/canvas), pleace follow canvas's installation [wiki](https://github.com/LearnBoost/node-canvas/wiki/_pages) to install dependencies.

## Features

- Background noises
- A dummy character (presented in red color)
- Customizable string pool

## Usage

```js
var captchar = require('captchar')

captchar()
    .then(function (data) {
        console.log(data)
    })
/*
{
    src: '/PATH/TO/PROJECT/.captchar/73f1b787f3f125d8091b3a640343d4de.png,
    code: 'TyK2'
}
 */

captchar({ format: 'datauri' })
    .then(function (data) {
        console.log(data)
    })
/*
{
    src: 'data:image/png',
    code: '5HPp'
}
 */

captchar({ format: 'stream' })
    .then(function (data) {
        console.log(data)
    })
/*
{
    src: 
        {
            sync: undefined,
            canvas: [Canvas 80x30],
            readable: true,
            _events: {}
        },
    code: 'jF4i'
}
 */
```

## Options

```js
captchar({
    width: 80,
    height: 30,
    fontSize: 22,
    fontFamily: 'Times New Roman',
    textLength: 4, // dummy character is not included
    backgroundColor: '#fff',
    outputDir: process.cwd()) + '/.captchar/',
    imageName: md5(Date.now().toString())) + '.png', // do not pass .png; recommend to generate image name manually
    format: 'datauri' // 'stream', or output to disk,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
})
```

Sample with default options:

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAYAAAC7Q5mxAAAABmJLR0QA/wD/AP+gvaeTAAATcUlEQVRogcWaaZBc13men3P33rfpnn0GswCDAUCAAAhiIUgKXESFoiVKsWypYkcpWmUrsSu2UkmKTiSZpVhORXKlVJZSiWOZcpmJ5XJEqUxJFEUyFCkAQ4AgSBAgllmA2We6p3t63+9y8qMRWBClkoukpPfn7XPu/b7nnnve73zVQkop+REVXjvLWjxNvrdOgl66Zg3My2X83Sba1hHcXA6EQcv1sAtptLwKDRc3ZjFfmSZ2dDeiW2PNW+J24yEU1Bv3dmkhcdHw89PkXjoPSNSJXaCqP/KLpCyvEhTDKOgA1GSdv20/ySPmbyAQP/WeP09pndA8Mu4Cy+4V2qMlumcCHB5+GKXSxg1UcLrStJdWsFdfx3UM9C4T1XDwkgbeni5C0QmEUElNS+bmztHsUjikfxAFFdmWeFWJiHvU5DJBMXwdB6QdB10IHCkJqyoaoFo+aDeRxTwikQTAA6pelTIqRQfqXoukppFQ/QRFkLSXoVfp+eUAXHGnWXGuoDYlfcV+4quDOLNrNGdfQlgGSjyEEg+jjx1Ari/Aag38MdQ9fbiVJbRMmQZz+KPbiIyOYBTfZKlloxsBcKF12cFru7ScFUTSoU2BqispeLBuO6hSoAgFG4FEIa7Y6BqYmWVyPgMPQUOCEDlCwiKkSnKuy4DeWYXDyiCL3sovD2DuwhmGF0KElRRq3EKJhZDdMbTRXoxtgzcNlhETEVvHa+g0n3kDb3uQwPhOapnztPNNqimPRh/suDbEc5Mvcv/svahRQasvQykN5Q2ParCNrYCGS0vUsJUSRa9MmRJ1ykxacXY2+/A5Nqa7jOM3qXsOecdhj28IV6psOA5BRQFgSOnnhHOaQ9z2y+CHtkM/ivErQ6AqNy4Ky8BdycKPARSRKCKXBS+MtmcfzYVz1GZex7hjK7VghurKZXbKYcw5hfkel2eTpxmK9lOyPSqJBtV2llpjDdtXpqGU0DAJyRhjehLpjhIQEYqB16iUNuhPHEAp24jQEAueTUqVqGjkPZeI8g+x9ijdlGWZumzgF75fGLj/L/XfH3rwMXc1B7qGGgmAECh+k9aZaYydW0DcvDkrfj9ebhm7FscZUxBLAm9Dcq17nWYUkkoP2kqJgeoAL2+5jF9VCKhBZniZXsPP1kYfu1bHuCd2iFvM3WjuIIfNYQa0BEttwV7fGO30VaZSa4xu6CjxFNO2zZhhYAjBmuMQUhTC1w1GIMh4WRQh6FISv3CAwp5fl42X3kAJdt6evmMYdbyX1nOvY9w6jtb31qDk6hKttEe9r415fI36e4eYUc8znNvOl744hVIA0a7gRgUXIgXmZYvb7k+yxRxEwUA2JAeVER48tIuXzQbV9UVOLs5R8zyqnkeqUiITaHAgbvDw2AMcb7S4MPsanpSsOw5dqoouBMlAmP5wHD3WwuxyeEC/5xfNDyGllPb0Mu1Li5gHJqhfvYZYr6CYFmp/Auv2ybdMcpw6cnqGYraGWYcL92XYoR3hiT99kz/8zFNvGf+hR1Jc3mVzMV/gju5RnvzQ7xD2WbSmbS7224wlLVTH5sN/++ecWLrK/mQv3/3wx1kz1sisTzMw/j6SrsX7nvjPnE8vcOfwJL99230UGlVOr8zy5KXTdCf9fOvh/8D2rv5fBLcb0gD0iUFky6b1+izVByKk2jtxLy7Tnl6GtoOxcwtKLHRjkqKZFJMK5twmSyMOiXKQYE3w1187xZNPvR9/wsK47CI0E2NiiOW+0zx1fIaLeTicGMJKa7TqDkIXBDcFm7bN+IDFHUNjnFi6yu7eIUKeZDyyH2e1zNnGMxwLvpfDW3ZwPr3AXcOT/NMdBwH4xP57+f3DD3Ln45/hgSc+z4V/9aeEzZ9eZ77burEbG7tH0brjOC9cQvX5MA9OInwmKAr151+j8fxZ3PX89UkqTcuiKcrUg3WGW3fxd/97jgfeu5VDh7vYOxJi19EwO90at04kyMbqtBJG5zmigpFIY+0VGOMa0bhGGY/WjIN2PRyfabFZqZBxHCLRcY5VdvCd9jPUlcZPTMLfJdm1rYtstczfX3n1583sJmmtV65g3r4dAPX2UVrHz9J86Q1879mL1hNFPXMCq1HAzVewj8do3noAY89WrHKVKxMFthcm8BrwZ393nNlrGV48M8/evUPc92CKY0GV6lMncH+lyYg6BCyxFrVBVfGuXUFJJIl3dzHXsDEHNVjvBBUxLeqNGul2mx2JFMH5Eg/3Psi35Jd/YhKn7DNsDQ1ylgyZaunGdSnh9PQqQsDBiX5OXlrmlZk1/KbOR45OEg+9c9fWvFKVxg/O4btrNwV1lfIdFvwA2l/9Ouaf/Eecu94Lv/sI6uYm6qOPwle/RPPfPsbKbRr4NERLYTrzJqgOobDFubNrnDu7xte+CruHg3zpD/bj0/0oUgMgT5ErXRV2xLZSz1zFmssSDsep+3yI646vKgpBTUNxHMKBAJ7fT7AEPYwBcyx7qzcSmHOvoaFRK3ROpEPxGABPvHCBz/3ND5nPFPnUwwf5yrfPcGExy7X1AvWWzaf/+gf8/Wd/nSOTA+8MoHXvPlpTF6l//wyle1sIU8M3HEF+8JN4v/bPaN3/q2i37kOYOuzbBzt3Yn7m92l9898xuLAHuVZleKjId776q8RGt/Lquav85Ref5hs/mOf8YpVf+6MpPn/3XhTRKTvWl+DR//sttigDeLTw2ybtSgtNVTlbyt8IrG1ayHKDgvATjSSo5dIEhQlASZZ5yT7JnfphXnFeQ6wmeGb2HH2xMNtGOwB/855bODu3zle+fYbnzs3z3cc+Sn8iRK1p83v//Xs88cIFPvZfvsnMX/wupq6+lcw/UopQFKw7dqH2xdCfXkSvCPj8HyNqFdoH7kY6Ls5KtjO6pwf5L/45olZn15+dQdnaTft9cXTFQp++ROu5F9mTu8KXPz7K9//qw0QjFrmyzXf/aAnR8StCmo9dgTHWjCVivjBaWCHc248ZiqDZTQA82yXnGIyUHdZLLuVygHK9Tux60KU1wddOneCRH36R//at03zy63/F/eN7ePw3HiEt0jeSiwctAD50aIL+RMcEA5bOX/zrh9iSirC6WeH5c9feNjy47sIIQevWCLWAQfyZKjz9NADWxx6k/sIbuCtZ9LE+bJqsf3AHQ/8VrNOvEa01adRr+McmaTFP41oBXYbQukPcdtcePvsY/JtPPcnUD/Ps+L3O53lkcJR/eWQv55w4BVnlqH6ItqeQacdp6y2Ob6RprWWJhBvE45JKDZZMhz4lgdq8AIBPMzka2MMVZnjg9gPc89B+uoMRarLO19vfQCJv6s782FkATVU4smOQhY0Sl5ZyvP/A1rcN8IYLF1hF29pH/Y4wbHY+JeE5+O7bj7O0QXVpjrPeU8z1FDoTypvYmgeJfmrzeVhrooc0irf0YkyOIQydD3zgFgCqTRdZrAHgYFORRd6j302YMBecORxRouY18Zc6qyQd1gkHdLxCBZ9RoZCS+IJJvHIdgH29I3xi3318Yd8n+ejoMbqDEQACwk+QTnfmZ2mgq/MsRXlnbbAbAIusE6GHZsBCdvcC0H72JErYTysO+eNT1MpluhYDALhDvawaG6ytvsqSd5FWxEdw+zB6j0FGayF8Bn5/Z8/aOpbA3ey4Y02WSYo+VDTuM+6mKmss1nN4xQwNpWMERXOTkE/BbjgUhaTXsdnwV7i5cwkKylv6gCPqEIve8s9MPFvqvIzJga63w+1HYgAalPFwsQihaArukYcAkH/5v1h55nly8RKlYY3IZRVf0+lMvPchtkyFGUynaAU8Lh7LMdO/jtXOUW+V2CxnmTrT2V9+87eOQtsGQEMnIMKde0iFe9PHWCiv0gytUzY7SSUqTaobOepIBldW6L+4BOkyMtQpkL3Gj5H8EQ0pg/8ogK/OrpOM+Dm2Z8vb4XZDCkCBFaL04eKg+3XcTzyK7O1Ff/VplPwCoXyAXKzI1tox+r/yAm5XktrkA6CFseo63/2+n5f/PIxfm6AuKpRCFziTf4HPPPZNdtwV4bd/505qkc5qxDGR7TbuRonWK+tYmQ0+XNlGanEZLd0pTzwtxFWfj2IsRC3RQ/vWSXxdW8jWOx9MvdrGLno/MaEeJUVV1qjJ2o1ry7nyTWOeOj3DhYUNPv/xY/gM7R0BVB/79KcfW1beJESSNS6iCZN2XGf2nySJP3+e4MnTpHeqqGWHwNT3MV8+wcUvPMLmoSi5UBYZN3j0P53lqf9zmb95/HVKwmb1lSr/40tXmbhb5ZN/HMfO1/nyudfZaLVoVEs85IUxMzZql4o2GMTULfLpOl9YvECx6eB5JtFJOJoYQ2QbzKcCzCs1Hj/7bTZrJaSA98duw9R1FEvcZBICQVZuIoFLF2u89OYStaZNulDFk/DNqWk+9T+f5Q9//Q7+4IMH3xE8AGEXM/JM+HlaskXNLeN5YCgmkVwvMSsJJ54l8OoSRl6hOdKDvP89lOrL+HM6wf078beh4Am+MXUFZzWAV4cRC+6ZTNAIbTCzkeXURg3PZ2LEEqCEEKgc27uVgwODeOvLnF5e4MWlKsvdG1So0FueIBdd5MhgnIc2B5lO+XlxdYa2q1F0PRQEQUdwLLidI13jmDEVLapwvdTksjvDorvMK9/Q+dzXj/PZj93JA/vHePnKCpaucc+eEbb1x98xPABtSnmafDuHXw0SV7vRdYNtHCWgd1Faz/PmPSvs1D6CuZnGJ114QxKM91PvahI+VcM8NEZIunz0Y7cTJYlR8NOYKyIyaaqZKqFUiKO7Bxm1d9GI5NECKkoMrEqZwuxJvGiELYPj/NagjjlgMjV/CYKSA8mPsFJfxclmEJrCyH6XqizT7ZkERZiEEkY22kyv5zA3TWJZH5GIjj+mMmQOcMI+hWT4RqIHJ/o5OPHud2o0LI997SOsm0sIBClGCJOiHq9wpXmS3qkAer2I/wOHqH/nFEo8hFmusj5ZJdHsw76wiDEaI1AJ0Ji+iLzWQI0nEcMDmGaKQCWDLWu8HjxPRs8QsH1sm7OIS5NcfwJT8WMseYQnYK1SY8Dewsuh7+E6m4y1x/B7YbZV+tkRGiUWSrDplTndzNGvtagHKuT757DWw7ycnMXXDDKw2I9pqATD4Zv2wZ+XtLyXxxVvEncHiKv9eHjMOa+x1pimd86guzlC4QM6TbVI9OB29JFevHyFxHPfo77HwX/Vo/XGLKbnIBM61r6tqJEwmJImDQacIMO5MRqpOlSL+AslqqrORkClUCyyoV6mPFii3XYZzu7En5D0qr3MOvMs+DbYlQqQrCuo2QRaNkgsEuYWv5+6J9lnmqCDo3js39iJ2+8wmyhQW28znt7L6eIlAGz3JxvOuwIwafTQaJepNArkjCweDolCF7tOJgjfegvacC8B1SHrrZIeaZESTYyAhZlK0j5zDU/vRoklUSIBmns1rKYf1YZ2aQOvnSHWNHCVPHJT4mpt7L5h4qFu4i7Ymx6yJdGEylXZIiJdnHiBvGfiiBZtCRWrgtpcYSWwTDV4kt5yDwP5IeqayWoiTn84jBZUaNQ8NhfAL6P0BTTiQyqfy50C4NSVVWpNm4Clv+sAxevy2xJPwS01aVkugRVJXmSJdo/S658gqQ6hXj/xldOLVC/PYK218XXFubpnheHXetDMAF61jt3vw741RZfSy7J3lYToJpC3wfSzvDBPYDBBTakTqqQw2j60iIIWFCxU2lCXDMUMtFCnVKlRYVOmGah1k115k4Z/C6X+PEWvRMkrU6+6BDYjTDKGSpwWEAmphBsCrQ8ef+ENKvX2PyQq4P0HxtkxlHx3AT5b+7JUXIPtxR1Ep5qo0SDG7kFyapa0tkpJZIlk/SRmVKKtOPqWJI0USAUKgQyGa5E4o+AVqri2gzNkYPbGoNnAcnWU7gGkkOSaG4QKUbTtcZZ9a3S3B1FLPqpllzXDYVu3hWkpNwW3JucJuUHsmYto+kFCoz6QEqciaZc9Flstan6XpG6RqCpoOiA7NY01oN5w5Z+nNKEbHN58EG9qBr0vgXFwJ2gaXfkg4SsazTWNwphk/Y4mC/5NUkqIXncQpdKk5a9Sba3Su/cwzuV5RDaHXKtRiQq6xvciVAvqdWoJnbJXINQaQBYVevxDpI0lUqkR5gIe4y0Td92jqUm0qEANKggBXaKXVWWeoPDwaZLmiovrQNHnsRa0CXZrOJ5g0G+gpMCrS+ySh1uVNFcdjISKZ0ukC0ZC+dk03obE6rkXZHhG4LtrN6quYC9vYK8VkLUm+rZB9K0DCF+nHd/yamxW5iiV5tBrbSJOlLrIExRJwmY/suRSvTyLQCN81+2oET8IhUywRFs06G+N0zxvY+3WqVklzjaXGVDGGDc6RzSn6uEUJV5bokcVFEuwWcqhrizhC41SsAIsJR2SQqUfHd0VLDfaKK6gW6pIG6QjkR4omkBKieoTuA2J1aeiWO/+/2dE6dkpGbhlAmc+jb2wjho0MfZuQ+1PvrUPdF2yWKTiZskaGdLNaXRPIS77iDpx1FwNcSWLiY7WG0GJRShYZTTNT1hP4ZUU3IZCecRgSRTpsRz6jHGEpoFQ8FoSe1PiVDvOaSs2xcYVPDeKYfURUlU0AYouEBpIXXDFbTHuNwiYKkKTCK0Tt5QggHbOQ6igx9/9Vfj/AMEpkIwJAc/cAAAAAElFTkSuQmCC)

The real code is `5HPp`, `o` is dummy.

## Contributors

- [Chris Yip](https://github.com/chrisyip/node-captchar/commits/master?author=chrisyip)
