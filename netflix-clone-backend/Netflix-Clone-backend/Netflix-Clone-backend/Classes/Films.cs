using Netflix_Clone_backend.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Netflix_Clone_backend.Classes
{
    internal class Films
    {
        private int id;
        private string title;
        private string description;
        private string poster;
        private string director;
        private DateTime releaseDate;
        private string trailer;
        string _request;
        SqlCommand _command;
        SqlConnection _connection;
        SqlDataReader _reader;

        public Films()
        {

        }

        public Films(int id, string title, string description, string poster, string director, DateTime releaseDate, string trailer)
        {
            this.id = id;
            this.title = title;
            this.description = description;
            this.poster = poster;
            this.director = director;
            this.releaseDate = releaseDate;
            this.trailer = trailer;
        }

        public int Id { get => id; set => id = value; }
        public string Title { get => title; set => title = value; }
        public string Description { get => description; set => description = value; }
        public string Poster { get => poster; set => poster = value; }
        public string Director { get => director; set => director = value; }
        public DateTime ReleaseDate { get => releaseDate; set => releaseDate = value; }
        public string Trailer { get => trailer; set => trailer = value; }

        public (bool, Films) Get(int id)
        {
            Films film = null;
            bool found = false;

            // Création d'un instance de connection
            _connection = Connection.New;

            // Prépartion de la commande
            _request = "SELECT f.id, f.Title, f.Description, f.Poster, f.Director, f.ReleaseDate, f.trailer " +
                 "FROM Films AS f " +
                 "WHERE f.id = @Id";

            // Préparation de la commande
            _command = new SqlCommand(_request, _connection);

            // Ajout des paramètres de la commande
            _command.Parameters.Add(new SqlParameter("@Id", id));

            // Ouverture de la connexion
            _connection.Open();

            // Execution de la commande
            _reader = _command.ExecuteReader();

            if (_reader.Read())
            {
                film = new Films()
                {
                    Id = _reader.GetInt32(0),
                    Title = _reader.GetString(1),
                    Description = _reader.GetString(2),
                    Poster = _reader.GetString(3),
                    Director = _reader.GetString(4),
                    ReleaseDate = (DateTime)_reader[5],
                    trailer = _reader.GetString(6)
                };
                found = true;
            }
            _reader.Close();

            // Libération de l'objet command
            _command.Dispose();

            // Fermeture de la connection à la BDD
            _connection.Close();

            // Retour de la liste de contact
            return (found, film);

        }

        public static List<Films> GetAll()
        {
            //ObservableCollection<Contact> contacts = new ObservableCollection<Contact>();  // Avec WPF
            List<Films> films = new List<Films>();

            // Création d'un instance de connection
            SqlConnection connection = Connection.New;

            // Prépartion de la commande
            string request = "SELECT f.id, f.Title, f.Description, f.Poster, f.Director, f.ReleaseDate, f.trailer"+
                 "FROM Films AS f ";

            // Préparation de la commande
            SqlCommand command = new SqlCommand(request, connection);

            // Ouverture de la connexion
            connection.Open();

            // Execution de la commande
            SqlDataReader reader = command.ExecuteReader();

            while (reader.Read())
            {
                Films film = new Films()
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Description = reader.GetString(2),
                    Poster = reader.GetString(3),
                    Director = reader.GetString(4),
                    ReleaseDate = (DateTime)reader[5],
                    trailer = reader.GetString(7),
                };
                films.Add(film);
            }
            reader.Close();

            // Libération de l'objet command
            command.Dispose();

            // Fermeture de la connection à la BDD
            connection.Close();

            // Retour de la liste de contact
            return films;
        }

        public virtual int Add()
        {
            // Création d'un instance de connection
            _connection = Connection.New;

            // Prépartion de la commande
            _request = "INSERT INTO Films (Title, Description, Poster, Director, ReleaseDate, trailer) OUTPUT INSERTED.ID VALUES (@Title, @Description, @Poster, @Director, @ReleaseDate, @trailer)";

            // Préparation de la commande
            _command = new SqlCommand(_request, _connection);

            // Ajout des paramètres de la commande
            _command.Parameters.Add(new SqlParameter("@Title", Title));
            _command.Parameters.Add(new SqlParameter("@Description", Description));
            _command.Parameters.Add(new SqlParameter("@Poster", Poster));
            _command.Parameters.Add(new SqlParameter("@Director", Director));
            _command.Parameters.Add(new SqlParameter("@ReleaseDate", ReleaseDate));
            _command.Parameters.Add(new SqlParameter("@trailer", trailer));

            // Execution de la commande
            _connection.Open();
            int Id = (int)_command.ExecuteScalar();

            // Libération de l'objet command
            _command.Dispose();
            _connection.Close();


            return Id;
        }

        public virtual bool Update()
        {
            // Création d'un instance de connection
            _connection = Connection.New;

            // Prépartion de la commande
            _request = "UPDATE Films SET Title = @Title, Description = @Description, Poster = @Poster, Director = @Director, ReleaseDate = @ReleaseDate, trailer = @trailer WHERE id=@FilmsId";


            // Préparation de la commande
            _command = new SqlCommand(_request, _connection);

            // Ajout des paramètres de la commande
            _command.Parameters.Add(new SqlParameter("@Title", Title));
            _command.Parameters.Add(new SqlParameter("@Description", Description));
            _command.Parameters.Add(new SqlParameter("@Poster", Poster));
            _command.Parameters.Add(new SqlParameter("@Director", Director));
            _command.Parameters.Add(new SqlParameter("@ReleaseDate", ReleaseDate));
            _command.Parameters.Add(new SqlParameter("@trailer", trailer));

            // Execution de la commande
            _connection.Open();
            int nbLignes = _command.ExecuteNonQuery();

            // Libération de l'objet command
            _command.Dispose();
            _connection.Close();

            return nbLignes > 0;
        }




    }
}
