import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";

import styles from "../styles/comment.module.css";

import { comments } from "../commentsData/comments";

export default function Comments() {
  return (
    <div className={styles.comment}>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className={styles.swiper}
      >
        {comments.map((c) => (
          <SwiperSlide key={c.id} className={styles.swiperslide}>
            <img src={`${c.images}`} alt={c.name} />
            <div>
              <p>{c.comment}</p>
              <p>{c.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
