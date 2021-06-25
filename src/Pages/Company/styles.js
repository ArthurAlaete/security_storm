import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 100px 130px auto 250px;
    grid-template-areas:
        "header header"
        "navBanner navBanner"
        "content content"
        "footer footer"
    ;
`;

export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`;

export const WhoWeAre = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 40px;
    margin-left: 50px;
    padding: 25px;

    hr {
        border: none;
        margin-left: 20px;
        width: 40px;
        height: 3px;
        background-color: #E78A40;
        transform: rotate(90deg);
    }

    p {
        margin: 0;
        margin-left: 20px;
        text-align: center;
        width: 400px;
        font-weight: bold;
        color: var(--tertiary);
    }
`;

export const Logo = styled.img`
    width: 180px;
    height: 180px;
`;

export const WhatOurMission = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const WhatOurMissionImage = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 150px;
`;

export const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const WhatWeDoImage = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 150px;
`;

export const HowWeDo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const HowWeDoImage = styled.img`
    width: 215px;
    height: 215px;
    margin-right: 150px;
`;

export const Experiences = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .listExperiencies {
        display: flex;
    }
`;

export const ExperiencesImage = styled.img`
    width: 200px;
    height: 200px;
    margin-left: 150px;
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    hr {
        width: 100%;
        border: none;
        height: 1px;
        background-color: red;
    }

    h3 {
        width: 500px;
        text-align: center;
    }
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        font-weight: bold;
        margin: 30px 0;
        color: var(--tertiary);
    }

    .link {
        background-color: var(--primary);
        padding: 10px 20px;
        color: var(--white);
        font-weight: bold;
        border-radius: 8px;
        text-decoration: none;
        transition: all ease-out 0.3s;
    }

    .link:hover {
        background-color: var(--tertiary);
    }
`;