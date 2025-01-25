import one from '../assets/svg/projects/VI_RL.png'
import two from '../assets/svg/projects/Roomba.png'
import Navx from '../assets/svg/projects/Navx.png'
import VISLAM from '../assets/svg/projects/VISLAM.png'
import five from '../assets/svg/projects/DoorKey.png'
import six from '../assets/svg/projects/Youbot.png'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Vision Guided RL Navigation',
        projectDesc: 'Deployed PPO-based Vision-Guided RL model for F1TENTH car obstacle navigation',
        tags: ['MuJoCo', 'ROS', 'CUDA', 'C++'],
        code: 'https://github.com/RaghulShreeramS/RL-for-Autonomous-Navigation',
        demo: 'https://www.youtube.com/shorts/Q55vnLB0K6M',
        image: one
    },
    {
        id: 2,
        projectName: 'Roomba using SLAM',
        projectDesc: 'Developed a Roomba-like robot that mapped and navigated its environment autonomously using SLAM for coverage.',
        tags: ['ROS', 'Python', 'SLAM'],
        code: 'https://github.com/RaghulShreeramS/Roomba-SLAM',
        demo: 'https://www.youtube.com/playlist?list=PL_k6fJlAg30-2SOXbFN7SjaujPAtK2stX',
        image: two
    },
    {
        id: 3,
        projectName: 'Visual Inertial SLAM',
        projectDesc: 'Implemented an Extended Kalman Filter (EKF) to predict and update the state at each timestep upon detecting landmarks, while utilizing kinematic equations and IMU measurements for pose estimation over time.',
        tags: ['Django', 'CSS', 'Material Ui'],
        code: 'https://github.com/RaghulShreeramS/Sensing-and-Estimation-in-Robotics/tree/main',
        demo: 'https://www.youtube.com/playlist?list=PL_k6fJlAg30_HRcLYt5BaIDjcRrky7Fag',
        image: VISLAM
    },
    
    {
        id: 4,
        projectName: 'Autonomous navigation using Imitation Learning',
        projectDesc: 'Trained a CNN using Imitation Learning to map visual data from a Husky robot\'s onboard camera to keyboard inputs, enabling autonomous navigation and obstacle avoidance in a PyBullet simulation.',
        tags: ['Pybullet', 'CNN', 'Pytorch'],
        code: 'https://github.com/RaghulShreeramS/AutoNavX-Car-Simulation?tab=readme-ov-file',
        demo: 'https://youtu.be/CQJ7SV9Csaw',
        image: Navx
    },
   
    {
        id: 5,
        projectName: 'Planning and Learning in Robotics',
        projectDesc: 'Implemented a Dynamic Programming based algorithm to solve the Door-Key problem, a pathfinding challenge within a grid-based simulation environment.',
        tags: ['Python'],
        code: 'https://github.com/RaghulShreeramS/Planning-and-Learning-in-Robotics/tree/main',
        demo: 'https://github.com/RaghulShreeramS/Planning-and-Learning-in-Robotics/tree/main',
        image: five
    },
    {
        id: 6,
        projectName: 'Mobile Manipulation',
        projectDesc: 'Developed a mobile manipulator simulation in MATLAB, incorporating kinematics, PID control algorithms, and trajectory generation, integrated with CoppeliaSim for cube picking and dropping tasks.',
        tags: ['Coppelia Sim', 'PID control'],
        code: 'https://github.com/RaghulShreeramS/Mobile-Manipulation',
        demo: 'https://youtu.be/72E1-IPWvKo',
        image: six
    },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/