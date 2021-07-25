import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;

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
        height: 100vh;
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
            justify-content: center;
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 5px;
            padding: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }
        .product-container:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
    

`
