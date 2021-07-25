import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cart {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    section {
        height: 100vh;
        width: 100%;
        background: #2c3e50;
        display: flex;
        justify-content: space-around;

        .product-container {
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 5px;
            padding: 12px;

        }
    }
    
    img {
        max-width: 150px;
        max-height: 150px;
    }
`
