import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const profile = (props) => {
  const { session } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>{session ? session.user.name : "Welcome"} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="grid items-center gap-4 p-4 py-8 shadow-xl bg-base-100 rounded-box place-items-center flex-shrink-0 col-span-3 row-span-3 mx-2 xl:mx-0 w-72 xl:w-auto place-self-start xl:w-full">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0}>
              <div className="avatar online">
                <div className="w-24 h-24 p-px mask mask-squircle bg-base-content bg-opacity-10">
                  <img
                    src={session.user.image}
                    width={94}
                    height={94}
                    alt="Avatar Tailwind CSS Component"
                    className="mask mask-squircle"
                  />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div>
            <div className="dropdown dropdown-hover w-full">
              <div tabIndex={0}>
                <div className="text-center">
                  <div className="text-lg font-extrabold">
                    {session.user.name}
                  </div>{" "}
                  <div className="my-3 text-sm text-base-content text-opacity-60">
                    {session.user.email}
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="dropdown dropdown-hover dropdown-top">
            <div tabIndex={0}>
              <div className="btn-group">
                <button className="btn btn-accent btn-sm">Follow</button>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  return {
    props: { session },
  };
};

export default profile;
