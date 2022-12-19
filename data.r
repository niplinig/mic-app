# Instalar las librerias

install.packages("DBI")
install.packages("ggplot2")
install.packages("stringr")

# Utilizar las librerías

library(DBI)
library(ggplot2)
library(stringr)

# Conección con la base de datos

database <- dbConnect(RMySQL::MySQL(),
                 dbname = "railway",
                 host = "containers-us-west-141.railway.app",
                 port = 7911,
                 user = "root",
                 password = "J2PMySYeEcosun7AXPPu"
                 )

# Ver información de la base de datos

dbListTables(database)
dbListFields(database, "Post")

# Obtener todos los resultados de la base de datos

postdf <- dbGetQuery(database, "select * from Post")

# Obtener los resultados por videos

video1 <- dbGetQuery(database, "select * from Post where videoNumber=1")
video2 <- dbGetQuery(database, "select * from Post where videoNumber=2")
video3 <- dbGetQuery(database, "select * from Post where videoNumber=3")
video4 <- dbGetQuery(database, "select * from Post where videoNumber=4")
video5 <- dbGetQuery(database, "select * from Post where videoNumber=5")

# Hacer una gráfica

graph1 <- ggplot(video1, aes(sex, age))
graph1 + geom_point()

graph2 <- ggplot(video1, aes(sex, reactionTime))
graph2 + geom_point()

graph3 <- ggplot(video1, aes(age, reactionTime, colour = sex ))
graph3 + geom_point()


rowVideoStart <- video1$videoStart

videoStart <- substring(rowVideoStart[1], 1 , 8)

rowVideoStartFormated <- substring(video1$videoStart, 1, 8)

rowReactionStartFormated <- substring(video1$reactionStart, 1, 8)

rowVideoStartFormated
rowReactionStartFormated


x <- c("17-12-2022")

rowVideoStartDate <- str_c(x, rowVideoStartFormated, sep = " ")

rowVideoStartDate

rowReactionStartDate <- str_c(x, rowReactionStartFormated, sep = " ")

rowReactionStartDate

timeDiferenceTime <- difftime(strptime(rowReactionStartFormated, "%T"), strptime(rowVideoStartFormated, "%T"), units = "auto")

timeDiferenceTime

timeDiferenceTime <- difftime(strptime(rowReactionStartFormated, "%T"), strptime(rowVideoStartFormated, "%T"), units = "secs")

timeDiferenceTime

graphRS <- ggplot(video1, aes(rowReactionStartFormated, age, colour = sex ))
graphRS + geom_point()

graphTD <- ggplot(video1, aes(timeDiferenceTime, age, colour = sex ))
graphTD + geom_smooth()


graphic <- ggplot(video1, aes(reactionStart, age))
graphic + geom_col()
graphic + geom_density()
warning()
