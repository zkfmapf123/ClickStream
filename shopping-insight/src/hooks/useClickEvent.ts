import axios from "axios";
import dayjs from 'dayjs'

interface Props {
  clickEvent: string;
  userId: string;
  userAgent: string;
  platform: string;
  language: string;
}

export const useClickEvent = async (props: Props) => {
  try {
    const res = await axios.post(process.env.REACT_CLICK_STREAM_URL, {
      headers : {
        "Content-Type" : "application/json"
      },
      body: {
        clickEvent: props.clickEvent,
        userId: props.userId,
        userAgent: props.userAgent,
        platform: props.platform,
        language: props.language,
        eventCreatedAt: dayjs().unix()
      }
    });

    console.log("Response:", res.data);
  } catch (error) {

    console.error("Error:", error);
  }
};
