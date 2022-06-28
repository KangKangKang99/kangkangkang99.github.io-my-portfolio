import styled from 'styled-components';

export const StyledPageHome = styled.div`
    .__video_bg {
        z-index: -1;
        video {
            width: 100% !important;
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            object-fit: cover !important;
        }
    }
    .__text-header {
        font-family: 'Amatic SC', cursive;
    }
    .__text-signature {
        position: absolute;
        right: 10%;
        bottom: 15%;
        h4 {
            font-family: 'Allura', cursive;
        }
        .__prefix-line {
            height: 2px;
        }
    }
    .__skew {
        transform: skewX(30deg);
        width: 70%;
        z-index: -1;
    }
    .__btn-action {
        font-family: 'Staatliches', cursive;
    }
`;
