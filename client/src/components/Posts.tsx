import { Box, IconButton, Card, CardMedia, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import Post from './Post';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { iPost } from '../assets/types/Post';

const Main = styled.div<{ backgroundColor: string }>(({ backgroundColor }) => ({
    backgroundColor: backgroundColor,
    padding: '30px 30px',
    height: 'fit-content',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    scrollMarginTop: '10vh'
}))

const Headline = styled.h2<{ textColor: string}>(({ textColor }) =>({
    fontSize: '2em',
    color: textColor
}))

interface IPostsProps {
    posts: iPost[],
    backroundColor: string,
    textColor: string,
    headline: string
}

const Posts: React.FC<IPostsProps> = ({posts, backroundColor, textColor, headline}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const posts: iPost[] = [{
    //                   id: 0,
    //                   type: '',
    //                   src: '/assets/images/post0.jpeg',
    //                   description: `זכיתי להדליק נר ראשון שלוש פעמים מרגשות ביותר הערב. 
    //                   הראשון בבית הספר הכוללני לאוטיזם, הדלקתי נר עם תלמידה מתוקה ובהזדמנות זו, חשפתי עם מנהלת בית הספר את שם בית הספר - פלא! שם שנבחר בעקבות תהליך עומק שהתקיים בשיתוף הצוות, ההורים והתלמידים. 
    //                   לאחר מכן הצטרפתי לשני ארועי הוקרה למשפחות המילואים והקבע היקרות, באירוע מיוחד שערכנו במיוחד עבורן. הדלקנו נר ראשון יחדיו, בתפילה להצלחת חיילי צה"ל והשבת החטופים לביתם עוד בחג החנוכה. 
    //                   חנוכה שמח 🕎
    //                   קרדיט תמונות הדלקת נר משפחות מילואים: רונן מני`
    //               }]
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
    };
  
    return (
    <Main backgroundColor={backroundColor} id='posts'>
        <Headline textColor={textColor}>{headline}</Headline>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        p={2}
        sx={{ maxWidth: 600, mx: "auto" }}
        whiteSpace={'pre-wrap'}
      >
        <IconButton onClick={handlePrev}>
          <MdArrowBackIos />
        </IconButton>
  
        <Card sx={{ width: "80%", textAlign: "center" }}>
          { posts[currentIndex].type === 'img' ?
            <CardMedia
            component="img"
            height="200"
            image={posts[currentIndex].src}
            alt={posts[currentIndex].type}
            /> :
            <CardMedia
            component="video"
            height="200"
            image={posts[currentIndex].src}
            // alt={posts[currentIndex].type}
            />
          }
          <CardContent>
            {/* <Typography variant="h6" gutterBottom>
              {posts[currentIndex].type.toUpperCase()}
            </Typography> */}
            <Typography variant="body2" color="text.secondary" style={{direction: 'rtl'}}>
              {posts[currentIndex].description}
            </Typography>
          </CardContent>
        </Card>
  
        <IconButton onClick={handleNext}>
          <MdArrowForwardIos />
        </IconButton>
      </Box>
      </Main>
//   return (
//     <Main>
//         <Post post={{
//               id: 0,
//               type: '',
//               src: '/assets/images/post0.jpeg',
//               description: `זכיתי להדליק נר ראשון שלוש פעמים מרגשות ביותר הערב. 
//               הראשון בבית הספר הכוללני לאוטיזם, הדלקתי נר עם תלמידה מתוקה ובהזדמנות זו, חשפתי עם מנהלת בית הספר את שם בית הספר - פלא! שם שנבחר בעקבות תהליך עומק שהתקיים בשיתוף הצוות, ההורים והתלמידים. 
//               לאחר מכן הצטרפתי לשני ארועי הוקרה למשפחות המילואים והקבע היקרות, באירוע מיוחד שערכנו במיוחד עבורן. הדלקנו נר ראשון יחדיו, בתפילה להצלחת חיילי צה"ל והשבת החטופים לביתם עוד בחג החנוכה. 
//               חנוכה שמח 🕎
//               קרדיט תמונות הדלקת נר משפחות מילואים: רונן מני`
//           }}></Post>
//     </Main>
//   );
)};

export default Posts;