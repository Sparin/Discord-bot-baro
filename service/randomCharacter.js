import * as Discord from 'discord.js'
import { client, hubID } from '../bot.js';
import * as fs from 'fs'


/**
 * 
 * @param {Discord.Message} message 
 */
export function randomCharacter(message) {
    const guild = client.guilds.cache.find(guild => guild.id == message.guild.id);
    const botlog = guild.channels.cache.find(channel => channel.name == 'botlog');

}


export function getName(message) {
    const firstName = ["Владимир", "Андрей", "Тигран", "Илья", "Ян", "Артём", "Дмитрий", "Николай", "Даниил", "Максим", "Глеб", "Ярослав", "Фёдор", "Михаил", "Арсений", "Егор", "Мирослав", "Денис", "Леонид", "Матвей", "Тимофей", "Захар", "Владислав", "Кирилл", "Григорий", "Иван", "Марк", "Александр", "Степан", "Виктор", "Савелий", "Ибрагим", "Василий", "Яков", "Георгий", "Евгений", "Станислав", "Данила", "Роберт", "Никита", "Сергей", "Мирон", "Всеволод", "Олег", "Константин", "Филипп", "Роман", "Тимур", "Герман", "Родион", "Лев", "Вадим", "Виталий", "Анатолий", "Павел", "Дамир", "Антон", "Леон", "Алексей", "Давид", "Платон", "Макар", "Борис", "Артемий", "Эмир", "Савва", "Артур", "Игорь", "Марат", "Гордей", "Семён", "Даниэль", "Демид", "Богдан", "Эмиль", "Серафим", "Тихон", "Лука", "Руслан", "Марсель", "Пётр", "Елисей", "Юрий", "Али", "Аркадий", "Вячеслав", "Билал", "Святослав", "Адам", "Эрик"];
    const secondName = ["Дмитриев", "Галкин", "Алексеев", "Горячев", "Лазарев", "Петров", "Золотарев", "Исаев", "Соколов", "Черняев", "Фокин", "Козлов", "Васильев", "Акимов", "Борисов", "Гуров", "Ершов", "Поляков", "Самойлов", "Фетисов", "Александров", "Федоров", "Богданов", "Михайлов", "Рудаков", "Комаров", "Седов", "Антонов", "Воробьев", "Курочкин", "Соболев", "Беляков", "Матвеев", "Сергеев", "Сахаров", "Климов", "Сазонов", "Комаров", "Семенов", "Попов", "Кудрявцев", "Терехов", "Колесников", "Кузнецов", "Зубов", "Волков", "Игнатов", "Ананьев", "Лавров", "Соколов", "Ильин", "Горшков", "Афанасьев", "Фомин", "Румянцев", "Львов", "Баранов", "Максимов", "Алексеев", "Белоусов", "Иванов", "Волков", "Шувалов", "Муравьев", "Карпов", "Никифоров", "Молчанов", "Прокофьев", "Вешняков", "Евсеев", "Воробьев", "Горячев", "Белов", "Морозов", "Никольский", "Агафонов", "Чернов", "Козлов", "Кузнецов", "Рожков", "Архипов", "Моисеев", "Белов", "Жуков", "Сорокин", "Смирнов", "Борисов"];
    const firstBuffName = ['Уверенность'];


}