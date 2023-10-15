import { useEffect, useState } from "react";
import { ContentDTO, UpdateContentDTO } from "../types/dto";
import axios from "axios";

function useContent(id: string) {
  const [Post, setPost] = useState<ContentDTO | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<ContentDTO>(
          `https://api.learnhub.thanayut.in.th/content/${id}`
        );

        setPost(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const editPost = async (editComment: string, editRating: number) => {
    const token = localStorage.getItem("token");
    const editContent: UpdateContentDTO = {
      comment: editComment,
      rating: editRating,
    };

    setIsSubmitting(true);
    try {
      const res = await axios.patch<UpdateContentDTO>(
        `https://api.learnhub.thanayut.in.th/content/${id}`,
        editContent,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const deletePost = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await axios.delete(
        `https://api.learnhub.thanayut.in.th/content/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return { Post, isLoading, isSubmitting, editPost, deletePost };
}

export default useContent;
