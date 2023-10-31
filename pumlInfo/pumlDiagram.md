## PlantUml диаграмма последовательностей

### **Рассмотрим пример кода на .puml для диаграммы последовательностей:**

@startuml

participant Animal

participant Mammal

participant Bird

participant Dog

participant Cat

participant Eagle

Animal -> Mammal : extends

Animal -> Bird : extends

Mammal -> Dog : extends

Mammal -> Cat : extends

Bird -> Eagle : extends

group Animal Actions

Animal -> Animal : eat()

Animal -> Animal : sleep()

end

group Mammal Actions

Mammal -> Mammal : giveBirth()

end


group Bird Actions

Bird -> Bird : fly()

end

group Dog Actions

Dog -> Dog : bark()

end

group Cat Actions

Cat -> Cat : meow()

end

group Eagle Actions

Eagle -> Eagle : hunt()

end

@enduml


*Данная диаграмма последовательностей представляет собой иллюстрацию взаимодействия классов в иерархии животных. На диаграмме показаны классы Animal, Mammal, Bird, Dog, Cat и Eagle, а также отношения наследования между ними.*

*Класс Animal является базовым классом для всех животных. Он имеет два метода: eat() и sleep(), которые могут быть вызваны на объектах любого класса в иерархии.*

*Класс Mammal наследует от класса Animal и добавляет свой собственный метод giveBirth(), который описывает рождение потомства у млекопитающих.*

*Класс Bird также наследует от класса Animal и имеет свой собственный метод fly(), который описывает возможность полета у птиц.*

*Классы Dog, Cat и Eagle наследуют от классов Mammal и Bird соответственно. Они имеют свои собственные методы: bark() у класса Dog, meow() у класса Cat и hunt() у класса Eagle. Эти методы являются специфичными для каждого класса и описывают особенности поведения этих животных.*
