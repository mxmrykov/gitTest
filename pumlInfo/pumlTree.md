## PlantUml деревья классов

### **Рассмотрим пример кода на .puml для дерева классов:**


@startuml

class Animal {
+name: String
+age: int
+eat(): void
+sleep(): void
}

class Mammal {
+furColor: String
+giveBirth(): void
}

class Bird {
+wingSpan: double
+fly(): void
}

class Dog {
+bark(): void
}

class Cat {
+meow(): void
}

class Eagle {
+hunt(): void
}

Animal <|-- Mammal

Animal <|-- Bird

Mammal <|-- Dog

Mammal <|-- Cat

Bird <|-- Eagle

@enduml

--------
*Данное дерево классов представляет иерархию различных животных. В нем есть базовый класс Animal, который имеет два свойства - name (имя животного) и age (возраст животного), а также два метода - eat() (прием пищи) и sleep() (сон).*

*Animal является базовым классом для двух подклассов - Mammal (млекопитающие) и Bird (птицы).*

*Mammal имеет дополнительное свойство furColor (цвет шерсти) и метод giveBirth() (рождение потомства).*

*Bird имеет дополнительное свойство wingSpan (размах крыльев) и метод fly() (полет).*

*Mammal также является базовым классом для двух подклассов - Dog (собака) и Cat (кошка).*

*Dog имеет дополнительный метод bark() (лаять), а Cat - метод meow() (мяукать).*

*Bird также является базовым классом для подкласса Eagle (орел), который имеет метод hunt() (охотиться).*

*Таким образом, данное дерево классов иллюстрирует иерархию различных животных, их свойства и методы.*
