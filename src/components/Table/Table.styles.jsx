import styled from 'styled-components';

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 640px;
    justify-content: flex-start;
    align-items: center;
    background-color: #ededed;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    overflow-y: scroll;
    height: 50vh;
    overflow-x: hidden;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #e7e7e7;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #a8a3a3;
    }
`;