import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div className="container">
      <Seo title={title} />
      <h4>{title}</h4>
      <style jsx>{`
      .container {
        padding: 20px;
        background-color: white;
        height: 100vh;
      }
      `}</style>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}