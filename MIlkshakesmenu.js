const Milkshakesmenu = [
    {
      id: 1,
      title: 'Vanilla Milkshake',
      price: 60,
      img: 'https://i.pinimg.com/originals/93/24/09/932409483c4c5ba86e0f9a5ebee9e1f1.jpg',
      desc: `Vanilla Milkshake, world's favorite milkshake, is a smooth and creamy concoction of vanilla ice cream, milk, vanilla extract topped up with whipped cream and chocolate vermicelli for irresistible looks.`,
    },
    {
      id: 2,
      title: 'Oreo Milkshake',
      price: 70,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoXb55c474ukAHj-uph9zileNxhXTipIt8SblaS4Qew&usqp=CAU&ec=48665701',
      desc: `With a bit of cookie crunch, rich chocolate sauce, and creamy texture, it's no wonder that people are so fond of this flavorful Oreo milkshake. Serve with a colorful straw.`,
    },
    {
      id: 3,
      title: 'Kitkat Milkshake',
      price: 70,
      img: 'https://purvanchaltadka.files.wordpress.com/2021/04/20210314_194007-01.jpeg?w=1400',
      desc: `The kitkat milkshake has a luscious ,chocolaty mouthy-feel,punctuated by crunchy titbits of Kitkat.The rich taste and unique mouth feel makes it a special treat that is incomparable to other milkshakes.`,
    },
    {
      id: 4,
      title: 'Buttersocth Milkshake',
      price: 60,
      img: 'data:image/jpeg;base64,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',
      desc: ` Butterscotch Milkshake is a tasty delight for the family in weekends& special occasions and healthy compared to the carbonated drinks.
      Butterscotch Milkshake is a rich and creamy milkshake made with homemade butterscotch icecream and butterscotch sauce.`,
    },
    {
      id: 5,
      title: 'Mango Milkshake',
      price: 60,
      img: 'https://assets.unileversolutions.com/recipes-v2/237839.jpg',
      desc: `Mango Shake (Mango Milkshake) is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk.`,
    },
    {
      id: 6,
      title: 'Strawberry Milkshake',
      price: 60,
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYEhEYGBISEhESEhESGBIYHBgaGRgYGBgcIS4lHB4rHxgYJjomLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzUrJSs0MTQxMTQ0NDQ0NjQ0NDU0NDQ0NDQ0NDQ0NDQ0NDQ0Njc0NDY0NDQ0ND00NDQ0ND40Mf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xAA8EAACAQIDBQYDBgUEAwEAAAABAgADEQQSIQUxQVFhBhMicYGRobHBIzJCUnLRM2KC4fAHFJLxJIOiFv/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAmEQACAgEEAgEEAwAAAAAAAAAAAQIRAxIhMUEEUQUTFCJhMnGB/9oADAMBAAIRAxEAPwD0cCOtEJsLmQcBtSnV3KyeCi658gzLVzBLZWOpyHQ23iVbS2LKLabXRYCOiWgTYXMkqKI4TlhqoqIlRQQGVXAO+xF9bTraA1TphAQkFdrUictzfvf9vaw+/kD892U3kNpExhJ8InwkShtCnUfIoa/MrYfcR9x1GjjeL3BkirWCFFN7u2Vbc7E69NItBwknTR0iiccbiVpU6lRgSqKzkKBchQSQL2F9J3AkkU6sBFtCLBAkLRYQBBFgIsABCLCAEIQkgBCLCAQKlspuLi2omao52UZqbrTDYaoEyVPs6jM3eoul2VbKbgEeJtbaDUCLaVlGzXHk0p7ejNYmg600P2hd2fOD39QLYVspyIQdS6i+77vIRclc1VBz5Lou85cpCVKhb+qjk/8AbNLaLaV0Iv8AcP0ZFKdULTAFRU+xD3p13GZadcP4AQzDM1PUaXy8pKp4SqQ7E1cxq4dFBZgTTyYXOSAeaPe3HPNJaKBCxoPyG3dFRhaTLie7uxponeAlyfFYoFPMZWv5rK9dnOKwq5Tl7zOBl/GDbP8A8CV8ppUpKGZgBmYAM1tSBewvyGY+5nSToRCzNO16oyOGoVgKZZXFu7NXRs7L3NFWF998ytficrLvN52oUmd2BWoy94GLuKq/iqkjXQgXHiU2KsoO651AigSFAs/ItcGJqUq7UlQrULijldStZix/2jDxOTl/iEDLa+axk5Eql6QY1AwamXKpUfMwrhnYMGCojDXxX8BygXFpqbRbSFj/AGH5F9BCEWanMcq9dEGZ2CLcLdjYXJsBOsou0rhmwtIkANU7xiTYBUXUk8rsJd0qyuqshulrKeYBtcdJF70W0vTY+0IQklQhCLACEIQAhFhAIccIgiiAAEW0URYAloRYQAhFhACKIRZACLCEkBCLCAeadusQ1baWHwy3IREJVb3ZmYtYjjoFnouCo5KVNPyqqnzAsZSdn9nU2xeMxjKGqGoaaMdcqooQBeV8u+aGZxjUm32defOpY4YorZbt+2wixIs0OQIQiwAhCLACEIQCIBFAhaOEAIQhACLCLACEW0LSAEWEq9ubYXCIrGm1RmvlCjTS1yx4bxJBazgmKRqhpqwZwuZgCDl1AAPIm506TKLtypjFNNVNFTYM61AbDj4rTQ7KwKLUD0ySmTK78KjX087DjALGMrVAis53KrMfIC/0neqtteGmvXrM921rlNn4nKLs6ikoGpYuwSw56MZWTpNmmOOuaj7aRX9j9sd99nTHgGd6lQ/jbTQDgLtv4299bMTsbCnZeAatUyDEOp7qk9RUud6rckXPEgcrSNie24rPhHo1TQp94wxNN6YfMgKH72U2GXPusb26TKORRj+XJ0eVij9RrCrS2td+zfxZD2dj1rq1RFYJmyozqVziwOYA62uSPQyXNk01aOMWLEiyQLCJFgAIQhAI8WEWAJCLCAEWAiiAERmAFybAbydLR0zvbN17lULlWJLWBIBUDxZrcBcQCTiO0VAXWm4qPwUGyg/zNwEyO12xlcg1Shpg3AF8i+WnxMh0Hp0+KqOLNZmb9KfWSjtPvBkQGoeRYKW8hx8oJJWxdneIEk1AOA+57m3ym+wJAUAEcPCutvaZbYmHpvT7xnJscrUlDnIf5xa/qdJoMHiuAXIm4ZtL+QklWWbrcW3bryp29SUU1Z9FVzUP8qhWJPp9ZcKZG2hh6dSlUWqB3ZV1fNa2UqQ1ydwtIkrRaDp2fP3afbb4vENVOimyovBUFwo462NyeZMh7PZg3IjrlItpqQLgENbQjfI9RVuwRi6BmCuwsWW9lJvuuLTth03XBPEcmsbkHjbScEq7PrPHx0lp4PZexe1TVpik2W6KGQorKCuYjQEbh4R53monnv8Ap6jvWqVLkqqZWJNyxYgrc7tLNoP2noU68TuKPA+Rxxhnaj+nXqxYsSE0OIWEIQBRCAhAOIhCLBAQhCALFiCLAOWJrCmuY+QHMzCdqsb3zNkYHIcuUmzEEePTlfh01mu2/wDwr6aMtri+8EfWYLHCmz94SRwNRQwvwuRx9gfORuaRUdO5R5A24WPlb35HrBLqddD8D+3nJz0LkmnUVl4Dfb6zqmCqHgGHS31tBWi62Jj8zKc+SqBZanBx+V/zDrvE2+EqpUILqBUA3HlzU8RMHs/ZYNs2ZNd1hp1vrNNgKLp4WbvFB8J3FeoMlWVaNOpjMRRWojo6h6bKysrAEMpFiCOIInLDMbatfoRqPWdwSfKSDw/t72dp4LFhaNhSqL3ipmv3ZBIYa/hvYjzI4Tl2d7OvimAXSnezVCNATYWUcW5Dyvae07R2TQxAArUkq2sQXRWtY3HzPuZ0w2Dp0wAqqMuihVChRyAGgnO8Ccrb29HsYvlHDAoJb8WQdk7Lp4WmtKmLAakm2Zm4liOMmiRq2IC3lbV2k17LNlsqPKk5Tk5N22XkSZWrtDFgmygjhaPpbfcELUUqd2vGRqNFhb4aNRCQ6FdmF8thCvjMm+RqRCwybpE2EzmI7TpTNipPtCPqR9mn2uX0X8WEJc5QhFhAAQhCAV23h/479Ch/+hPPa1Wwb109RPRNuj/xq3Rb+xBnmdY6uP1/58JDN8StCUay31X2/aWlPEKNyk/Hh0lFTOolpSXX9+G7dbykWbRxxaLrAY8F8pSxte4J69Jcpj2W1kB/qImX2fpVGvP/AKmgo34H16evpFiWKK6LvBY8uNUA3biTJxrm26UmyhYsP3lqR4TJM3jimSqVQlQTBdx85zwx8I8o9TofOSZtU3RlMdivEfM/OQhU1nHE1Lknzkc1JBVIuExM5YuuoXOyhstjK9a0bial6bDpKvg1gty6o9o6NRQA4U23HSQNobQBBsbzB1d5nfDVW/MfeYyPSx0uESsfimJ3H2hJuHJI1sfMQmdHXb9HqMWJeLedp80EIXiZpIFhEzQzQCNtRM1CqOaP8p5VWFqjj9fyM9axAujjmrD4Ty3GJasw62+EqzowFbSeXOHfxbuUpaaEb+Zlxhh4vQfKDqitmTMK9qo0539poqFQWvb0mboaVBNBhhoJAktkTdnv429JbsxynyMpNngB20/y8t3+6ZKM5rdEjCnwL5COc2Rj5mJhx4V8hOW0Hy0KhG/K9pJg+TAVHnEtOhoNx0iLR5tK0Z2MWt3bqx1XcRLOrRSouZDvEhmkhBBbSVzV3oPlU56Z+Eh7GkXZRbQXJUYdZxw9U3sASeQF522213LX36ze/wCnmyKX+2FYqGdydTrYcpnptnXHKlGzM4WppqCD1BEWbfbuEQNcKBfpCZOO53489xTouM0XOYy8LztPnh+eGeNhAHZ4ZokIApaef7Yp5a//AAPwAPynoExnapLVVI/KPcEj9pDNsD3Ms6WYjzlphhu/Ssg4lbO3nLHDDT0Eg7V2dqH8QTRYceETO4f+Is0lMWUSA+Edtmj7RvSWtU+Eyq2Pq7nylniT4TJXBnLlE2l91fIfKRNrtbDt1t8TJm5fSV+2P4arzt8BLHM/ZkqsiVLSxxFEyBUpkSjM0yHUbLc2uJDeqjbjryM74y9pRYi4N7SjNIyXZy2jRZ2uOEudgbUrUAFRyo4odR7SkFbk2vIyUr1GF1Fz0kM2x0pG2ba71AM1j5QmRoY2oNCpEJSzuUY1yeriOEaIonUeKLHRohAHCLEjhACZbtPSOYG3E29Qv7TUyp7Q0c1MHkbe4MhmmF1IwmMTxA+R+En4ceC/+bzOGNTQeVvbT6SRhv4XrIO9DsJrUXzE0xFl9JmsB/ETzE0tfQQhLhHXYY1cnpu9ZY4k6AcyBIOwxo56j6ybV1ZR/MJPRnLksKu74SFjvEQPOSqp1UdZwqC59B8zJOaW0Sqq4cGQK2EvL9knF6MUY2ZLF4A8pU4nZp5Td1MLfhI74EcpVxJTPOa2yb8JHXBVKZuhI6T0Ops0HhODbKvwkaS2ox9DaNRNHphutoTWnYw5RZGlltZp4oiCLNTIUQgIQBwjhEEUQAkbaVPNSqDiAGHoQT8LySI5UDeE7mBU+ot9ZAi6aZgsfT4ef7/WcsIPs2HWWO1aeUoed1P6hcH5SBSW2YdR9ZU9KDtC4D+Kn6l+c0OMawMocGLVE/Uvzl5jmhEvksNiDwMev0kqnrVHS5kfZQtS9TJWBF2ZvSSZS7ZLO/yBnNhqfT5CPJABJ4kD3No3+8scuR9DbRMsfCDE55IhpidYtoBGNIQFISQREtBY4iiOUJ2tCARBFjYogDhCJFEAcI4TnHiALFESEFSk7T4b7NnA3VM3owDfO4meJ0DeU3OPoGpRdBxVh6jxL9Zg6f3GXiNZRndglcTvhh9oh/mX5y1xRlXhPvL5iWlfVoN+y5w3hoi2+TMEtl85EA8CCWNBbACSjCT2OWKUnu1G4MGPkv8Ae0fEqNdyOAUa9STp7D4xZZHLN2xYQhBmLCEIAQtCEALQhCAV94oMYDHAwWHxRGAxwgCx0QRYAoixBFgHbDtqRzH+fX3mG2jhTTr1E4XNvJtR85tFNtZWdpMMC1OqB4WGRvPePr7SrNcEqlRmcA/iUS131LdZVKuSoRyaXGDW9S/C8g7Wy8VblRyEsEkOgNSfSPxNS1N8p8f3V6M2i/EiWOebOOEfPnf87MV/SPCvuBf1kmMpIEVVG5QFHkNI+ScsnbsWESLAFhEiwVCEIQAhCEkFWDHAzgHjg8gsdwY4GRMRiqdNGqVHCIouzsQAB5zz7bn+o5L5MGoyX1rVFN20/Ch3DqZSUlFbmmPDLI6iei4zH06NOpWqNZEBLEanTgBzvpaQ+z23FxtM1EpvTS9l7w07t1spJA855zh9u4nF06lGqyurlWIICG4IPhI0G7iJe9jdtVGxDYenhEp4ZfDdEbMoA0Z33MT9ZlDOpSpDNhlhlUj0ERY0GKDOgzFj2oiojUz0ZehGsYIj1SgzgXIsbc9dZBCdGd7QUClUPl0IA3cQB9D847Zz6ZjprreXm0SHUGm6BgSbOua9zexG8Wu27nOKYdd7FWPHQD2kUdCzUkiVhG8AbgbmCKTYncWLD00HznJSCLLY2/LY2jqLm4F/wnTkL3HzkozlJyJMWNvFEkoLFiQgCxZntrdrsHhm7tnNSoPvU6QVyv6iSAD0veSdldosPibZGKk/dDgC+gNrgkX1GnnKfUhdXubfbZdOvS690XEIQlzEWESEAzYrQqYpUVnZgqqCzE8ABcmVFTFESo23W76hUpZiudSt+Xn0lWyUrZi+1/aqpjnyrdMMp8CfnIv4269OEz9LfHPhKlNjnW1vxX09xHU6qADw66H8NvLdqJhKz0MWRRkopF3s2syC495bdnu1lbAgq1PvFdyzF2ZbKNPAff2lBgcSCQLWBNieV+OvKemdn2weIoUabUkqPSUWFRFY8CWBI1uTc9T5TnxJqb6N/kMcpY1KKuu/RsMFihVp06ighXVXAO8Ai+skBpAWuBH0audggOp+HMmehZ49E5TFfQa+x1nRstMADUncLatwv/aQqrudT4QdLnVrfyg/MwDniMMlsysVU/ha7KP6uHrILUOTp551lkHvTKMPCSNDre2uvPX5Rq0UGuVR/SJBJCpVCgazqBxOZdPWT8EEZQ4JDHe5DC+um/h6QdFOoAI42tO2CRQbAWPAbr9AP83SUQzrZhv1HMcPMfWLmkwKCNdOR/zdK/GEJx1PDn+0khHTPMr/AKh7VqYfCq1F3puXVe8pqGXKQQVcn7t9LHfe1paVsWRMt2pxjuKa6mme8WouYgMMoIBXcTcXB4EdZlklUWy6XZ59s6sA1iwaoc5JY+EXG4nna80uwXbL96wzMbA8VAtr1F/lKjaGz6KVL0yyAk3VnDZSAAdTrbXjyMlYBwiixXQWtcDKRpryM8vLs7ifSfGzyZMdS4rZs9R2DtEse6c3IBKG9zYbwZezKdltk2y13cM1vAqsCq3FrkjebEzVienhcnFWeL5sYLM9H+/2EIQmxxnmVRzI1VAQby2rYWV2IS15QsjDdpxkdLah1YMCDY2P95RKPYbpqe01DvFXeCpJFlvvmZbwnW/sReZTXo6vGlFSdnemwFvPdz634S62XjGp1FqI12Gt7HU3BYajda/tM2KtzpLbBYgZbcedhppYjoNZhKNKz28GVS/Ho9WTHFkVhxAPvND2fp2WpUIuwGntcj5TI7FoF8NTbobdRczU9nsdYmlU0vuvx0sZ1QdpM8HyMahNpdNkmjXuq1nvdyBkU3ylQfCTwAIP+GMWuSxc7948+EMRgFSpUdB94LnszW03eG9hacpc5zsHvfnzj1sd+p66ziJ0QSQdVseHrO9NCdwuBblpIqybhFsb89JKIZOp7tTv4HnxkTGEIlQixZELgEXzCxI+UP8AckN4hZL6X3m3SQcdjvFYWCZddbk8h5Whg5HDhxe2/X3mC7c7WppQanTDLWFQU6iPTKlQATe+438NrHUG82G0NoBab/ad0SCoqgKe7J0DWbTQkb9J5F2retnTvqnelh4XFTvA+XTMPyjU2HnMMr6RpjTckisoVWNyTcnfrvMtcLiDmS50JAbyvY24DQ75UYawBv58deEm4PxNwFrHxXs1tQD7Thmtz6/xtoJGx7P7RrYcmzEfcIViCGWzDW50+78BPR9i7Wp4pMy6MCVZfI2uOh/tPITXygWJDEEW6ZuNxrx36zc9haNRi1TJlpeKzHe5bUgakkXsbnj6zXBlakorg5PlPGxyxvI9muH7NvCEJ6B8uZFkvOL4QHhLEU4vdytAocTsdH3rK6t2UpPvWa80oq0oosnRhf8A8Jhydb+hk3CdhMIrBirNaxsXa3sJsVpx6pGlMvHLOPDONHCqqhQAFAAAAAAA3ACI+EB14yYFjgsmijk3ucKNSovHMLEa7wOhgo4G7fqAB9x+0kZYZIoqR1Veo9QYote9z/xJ+UkZIoSKJGBtNx+A+cEqMv3dPX6TqKcCkEETEF33n+8gVMM3CXHdxCkUTZjtp4WuVYKpNwdwvf3nnlfYOJqA56TIwJsCQx38SNDPczSHKcWwi8hKuCZeMqaZ4VT7O4wGy0yw5EES+2b2RxjkFkVBpfO9tP6bz1hMKo4fCdkpAcJm8MXyd2L5DJj/AIlH2f7M4egA1RRVq8XdQQD/ACqdF+fWalTOCpFrFwv2Yu/AHcfM8B/nSXjBRWxzZs8sruTtkkGE44cuVGewfiBuHQc/+4S5zlVHQhBAsUQhAATosIQB8WEJIARwhCAOEIQgBCEIA6NhCAEbCEAUR4hCCRyx4hCAOESEIIP/2Q==',
      desc: `Strawberry Milkshake prepared with this recipe is simply heaven because it uses bare minimum ingredients like fresh strawberries, milk and ice cream to bring out three good qualities of any shake; fresh, creamy and flavorful.`,
    }
  ];
  export default Milkshakesmenu;