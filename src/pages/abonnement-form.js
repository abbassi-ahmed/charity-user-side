import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/Reuseable/PageTitle";
import axios from "axios";
import { useRootContext } from "@/context/context";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function AbonnementForm() {
  const [subscriptionDataSport, setSubscriptionDataSport] = useState([]);
  const [subscriptionDataClub, setSubscriptionDataClub] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedSubscription, setSelectedSubscription] = useState("");
  const { user, isModerator } = useRootContext();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sportRes, clubRes, usersRes] = await Promise.all([
          fetch(
            "https://api.olympiquemnihla.com/subscription/get-type?type=sport"
          ),
          fetch(
            "https://api.olympiquemnihla.com/subscription/get-type?type=club"
          ),
          fetch("https://api.olympiquemnihla.com/users/find-all"),
        ]);

        if (!sportRes.ok || !clubRes.ok || !usersRes.ok)
          throw new Error("Failed to fetch data");

        const sportData = await sportRes.json();
        const clubData = await clubRes.json();
        const usersData = await usersRes.json();

        setSubscriptionDataSport(sportData);
        setSubscriptionDataClub(clubData);
        setUsers(usersData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (user && !isModerator) {
      router.push("/");
    }
  }, [isModerator, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://api.olympiquemnihla.com/users/assign", {
        userId: selectedUser,
        subscriptionId: selectedSubscription,
        moderatorId: user.id,
      })
      .then((response) => {
        toast.success("Abonnement attribué avec succès");
        console.log("Subscription assigned:", response.data);
      })
      .catch((error) => {
        console.error("Error assigning subscription:", error);
      });
  };

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger mt-5" role="alert">
        {error}
      </div>
    );

  return (
    <Layout>
      <Header />
      <PageTitle title="Donnez un abonnement" />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">
                  Attribuer un abonnement
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="userSelect" className="form-label">
                      Sélectionner un utilisateur
                    </label>
                    <select
                      id="userSelect"
                      className="form-select"
                      value={selectedUser}
                      onChange={(e) => setSelectedUser(e.target.value)}
                      required
                    >
                      <option value="">Choisir un utilisateur...</option>
                      {users.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.firstName} {user.lastName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subscriptionSelect" className="form-label">
                      Sélectionner un abonnement
                    </label>
                    <select
                      id="subscriptionSelect"
                      className="form-select"
                      value={selectedSubscription}
                      onChange={(e) => setSelectedSubscription(e.target.value)}
                      required
                    >
                      <option value="">Choisir un abonnement...</option>
                      <optgroup label="Abonnements Sport">
                        {subscriptionDataSport.map((sub) => (
                          <option key={sub.id} value={sub.id}>
                            {sub.title} - {sub.price}TND
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Abonnements Club">
                        {subscriptionDataClub.map((sub) => (
                          <option key={sub.id} value={sub.id}>
                            {sub.title} - {sub.price}TND
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Attribuer l&apos;abonnement
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Abonnements Sport</h3>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriptionDataSport.map((sub) => (
                        <tr key={sub.id}>
                          <td>{sub.title}</td>
                          <td>{sub.price}TND</td>
                          <td>{sub.duration} mois</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Abonnements Club</h3>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriptionDataClub.map((sub) => (
                        <tr key={sub.id}>
                          <td>{sub.title}</td>
                          <td>{sub.price}TND</td>
                          <td>{sub.duration} mois</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </Layout>
  );
}
