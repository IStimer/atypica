import React, {useEffect} from 'react'

const Banner = () => {
    useEffect(() => {
        const letters = document.querySelectorAll('.animated-letter')
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${index * 0.02}s`
        })
    }, [])

    return (
        <div className="header--banner">
            <div className="header--banner-svg">

                <svg width="1336" height="275" viewBox="0 0 1336 275" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="animated-letter"
                          d="M0.863281 218L52.4833 50.38C55.77 40.1333 61.1833 32.4 68.7233 27.18C76.4566 21.7667 85.1566 19.06 94.8233 19.06C104.49 19.06 113.19 21.7667 120.923 27.18C128.657 32.4 134.167 40.1333 137.453 50.38L189.073 218H145.863L134.553 177.98L55.3833 178.27L44.0733 218H0.863281ZM88.7333 62.85L66.4033 140.28H123.533L101.493 62.85C100.333 58.9833 98.2066 57.05 95.1133 57.05C92.02 57.05 89.8933 58.9833 88.7333 62.85Z"
                          fill="#1a1a1a"/>
                    <path className="animated-letter"
                          d="M193.361 146.95V106.64H159.721V71.55H194.521L202.061 33.85H236.861V71.55H356.051V106.64H236.861V143.18C236.861 174.79 248.461 184.94 288.191 184.94C315.451 184.94 337.491 180.88 358.081 176.53L366.491 211.04C344.451 216.55 314.871 221.77 284.711 221.77C222.361 221.77 193.361 202.05 193.361 146.95Z"
                          fill="#1a1a1a"/>
                    <path className="animated-letter"
                          d="M362.481 134.77V71.55H405.691V128.39C405.691 156.81 420.771 167.83 465.141 167.83C493.561 167.83 522.561 163.48 552.141 156.52V71.55H595.641V189C595.641 253.38 559.391 274.26 477.611 274.26C441.361 274.26 401.051 268.75 372.921 260.92L381.041 227.28C412.651 235.4 445.421 240.33 480.221 240.33C536.481 240.33 555.911 227.57 554.171 191.61L553.301 186.1C524.591 195.96 489.791 203.79 454.991 203.79C388.291 203.79 362.481 182.62 362.481 134.77Z"
                          fill="#1a1a1a"/>
                    <path className="animated-letter"
                          d="M644.005 271.65H600.505V71.55H638.495L641.975 93.88C671.555 80.54 707.805 68.65 745.215 68.65C800.025 68.65 832.215 90.11 832.215 143.18C832.215 200.6 790.165 220.9 726.365 220.9C697.075 220.9 668.075 217.42 644.005 213.07V271.65ZM737.385 104.61C710.125 104.61 677.065 111.86 644.005 122.3V180.01C669.525 182.91 701.425 185.81 728.685 185.81C767.835 185.81 789.005 174.5 789.005 144.05C789.005 116.21 774.215 104.61 737.385 104.61Z"
                          fill="#1a1a1a"/>
                    <path className="animated-letter"
                          d="M876.867 45.74C872.033 50.5733 866.137 52.99 859.177 52.99C852.217 52.99 846.223 50.5733 841.197 45.74C836.17 40.7133 833.657 34.6233 833.657 27.47C833.657 20.51 836.17 14.5167 841.197 9.48999C846.223 4.46332 852.217 1.94998 859.177 1.94998C866.137 1.94998 872.033 4.46332 876.867 9.48999C881.893 14.5167 884.407 20.51 884.407 27.47C884.407 34.6233 881.893 40.7133 876.867 45.74ZM838.587 74.45H879.767V218H838.587V74.45Z"
                          fill="#1a1a1a"/>
                    <path className="animated-letter"
                          d="M886.852 144.34C886.852 90.4 923.972 67.78 1012.71 67.78C1049.25 67.78 1084.34 72.71 1109.57 78.8L1100.58 113.6C1080.28 109.25 1050.99 104.61 1006.62 104.61C950.942 104.61 930.062 113.6 930.062 144.34C930.062 175.37 950.942 184.36 1006.62 184.36C1050.99 184.36 1080.28 179.72 1100.58 175.37L1109.57 210.46C1084.34 216.26 1050.7 221.19 1012.71 221.19C923.972 221.19 886.852 198.28 886.852 144.34Z"
                          fill="#1a1a1a"/>

                    <path className="animated-letter"
                          d="M1335.26 78.51V218H1297.27L1293.79 195.96C1263.63 209.3 1227.67 220.9 1190.55 220.9C1136.61 220.9 1103.55 199.44 1103.55 145.79C1103.55 87.21 1148.21 68.65 1214.04 68.65C1261.89 68.65 1303.65 73.58 1335.26 78.51ZM1146.76 144.34C1146.76 173.63 1162.13 184.94 1198.67 184.94C1227.96 184.94 1259.57 177.69 1291.76 166.96V108.67C1266.82 105.77 1236.08 103.74 1209.69 103.74C1169.38 103.74 1146.76 114.76 1146.76 144.34Z"
                          fill="#1a1a1a"/>
                </svg>
            </div>
        </div>
    )
}

export default Banner