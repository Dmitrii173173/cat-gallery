import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActionsContainer,
  ActionButtons,
  SocialButtons,
  Button,
  LikeCount
} from './SocialActions.styles';

const SocialActions = ({ imageUrl }) => {
  const { t } = useTranslation();
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isReported, setIsReported] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = (platform) => {
    const text = "Check out this cute cat! 🐱";
    const url = encodeURIComponent(window.location.href);
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
    } else if (platform === 'vk') {
      window.open(`https://vk.com/share.php?url=${url}`, '_blank');
    }
  };

  const handleReport = () => {
    setIsReported(true);
    // Здесь можно добавить логику отправки жалобы
  };

  const handleFindSimilar = () => {
    // Здесь можно добавить логику поиска похожих изображений
    console.log('Finding similar images...');
  };

  return (
    <ActionsContainer>
      <ActionButtons>
        <Button onClick={handleFindSimilar} variant="outlined">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          {t('social.findSimilar')}
        </Button>
        <Button 
          onClick={handleReport} 
          variant="danger"
          disabled={isReported}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          {isReported ? t('social.reported') : t('social.report')}
        </Button>
      </ActionButtons>

      <SocialButtons>
        <Button 
          onClick={handleLike}
          className={isLiked ? 'liked' : ''}
        >
          <svg viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth="2"/>
          </svg>
          {t('social.like')}
          <LikeCount>{t('social.likes', { count: likes })}</LikeCount>
        </Button>

        <Button onClick={() => handleShare('twitter')}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
          {t('social.tweet')}
        </Button>

        <Button onClick={() => handleShare('vk')}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.547 7.016c.129.277.245.555.346.838.179.502.273 1.033.273 1.59 0 1.195-.437 2.263-1.312 3.204-.875.94-2.008 1.41-3.398 1.41h-1.096v4.274c0 .332-.117.614-.352.848-.234.234-.516.352-.848.352H9.648c-.332 0-.614-.117-.848-.352-.234-.234-.352-.516-.352-.848v-4.274H3.398c-1.39 0-2.523-.47-3.398-1.41C-.875 11.707-1.312 10.639-1.312 9.444c0-.557.094-1.088.273-1.59.101-.283.217-.561.346-.838l6.914-11.852c.179-.387.478-.682.898-.887.42-.205.861-.307 1.324-.307h4.274c.463 0 .904.102 1.324.307.42.205.719.5.898.887l6.914 11.852zM12 15.75c.463 0 .859-.164 1.188-.492.328-.328.492-.724.492-1.188s-.164-.859-.492-1.188c-.329-.328-.725-.492-1.188-.492s-.859.164-1.188.492c-.328.329-.492.724-.492 1.188s.164.86.492 1.188c.329.328.725.492 1.188.492z"/>
          </svg>
          {t('social.vkShare')}
        </Button>
      </SocialButtons>
    </ActionsContainer>
  );
};

export default SocialActions; 