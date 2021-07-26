import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    background: #e3e4e8;

    header {
        position: fixed;
        padding: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 100px;
        justify-content: space-between;
        background-color: #000;
        box-shadow: 0 2px 5px rgb(0 0 0 / 50%);

        .logo {
            width: 50%;
            max-width: 450px;
        }

        .cart {
            cursor: pointer;
            background-color: #e3e4e8;
            display: flex;
            justify-content: center;
            align-items: center;
            position: bottom;
            width: 150px;
            padding: 10px;
            margin-right: 50px;
            border-radius: 5px;
            justify-content: space-between;
        }
        .cart:hover {
            background-color: #fff;
        }
    }

    section {
        padding: 2em;
        padding-top: 200px;
        height: auto;
/*         width: 100%; */
        background: #e3e4e8;
        display: grid;
        justify-content: space-around;
        grid-gap: 2em;
        grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
        
        
        img {
            max-width: 150px;
            max-height: 150px;
        }



        .product-container {
            text-align: center;
            height: 325px;
            background: #fff;
            display: flex;
            flex-flow: column;
            height: 100%;
            padding: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            align-items: center;
            justify-content: center;

            .description {
                font-size: 12px;
                color: #555;
            }

            button {
                cursor: pointer;
                margin-top: auto;
                width: 100%;
                height: 50px;
                border: none;
                background-color: #16a085;
                border-radius: 5px;

            }
            button:hover {
                background-color: #1abc9c;
            }

            h6 {
                font-size: 20px;
            }

        }
        .product-container:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }

    footer {
        margin-top: 100px;
        padding-top: 25px;
        height: 100px;
        vertical-align: center
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #fff;
    }
    

`
