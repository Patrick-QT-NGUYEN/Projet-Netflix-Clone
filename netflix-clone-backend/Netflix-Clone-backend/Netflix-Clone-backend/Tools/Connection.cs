using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Netflix_Clone_backend.Tools
{
    internal class Connection
    {
        private static string connectionString = @"Data Source = (LocalDb)\Netflix-Clone; Integrated Security = True";
        public static SqlConnection New { get => new SqlConnection(connectionString); }
    }
}
