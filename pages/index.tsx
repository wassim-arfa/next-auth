import Head from "next/head";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/client";
import { formatDistanceToNow } from "date-fns";

export default function Home() {
  const [session, loading] = useSession();
  !loading?console.log(session):null;
  return (
    <div className={styles.container}>
      <Head>
        <title>{session ? session.user.name : "Welcome"} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {!session && (
          <>
            <div className="card shadow-lg compact side bg-base-100">
              <div className="flex-row items-center space-x-4 card-body">
                <div>
                  <h2 className="card-title">Not Signed in</h2>{" "}
                  <p className="text-base-content text-opacity-40">
                    Welcome Guest
                  </p>
                  <br />
                  <button className="btn btn-primary" onClick={() => signIn()}>
                    Sign in
                  </button>
                </div>
              </div>
            </div>{" "}
            <br />
          </>
        )}
        {session && (
          <>
            <div className="card shadow-lg compact side bg-base-100">
              <div className="flex-row items-center space-x-4 card-body">
                <div>
                  <div className="avatar online">
                    <div className="avatar">
                      <div className="avatar">
                        <div className="rounded-full w-14 h-14 shadow">
                          <img src={session.user.image} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div>
                  <h2 className="card-title">{session.user.name}</h2>{" "}
                  <p>{session.user.email}</p>
                  <p className="text-base-content text-opacity-40">
                    Session expires in{" "}
                    {formatDistanceToNow(Date.parse(session.expires))}
                  </p>
                </div>
              </div>
            </div>

            <br />
            <button className="btn btn-primary" onClick={() => signOut()}>
              Sign out
            </button>
          </>
        )}
      </main>
    </div>
  );
}
