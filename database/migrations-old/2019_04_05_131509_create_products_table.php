<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
            $table->collation = 'utf8_general_ci';

            $table->increments('id')->unsigned();
            $table->string('slug', 200);
            $table->text('title');
            $table->text('excerpt');
            $table->longText('content');
            $table->text('descrtitle');
            $table->text('descrtext');
            $table->text('descr');
            $table->decimal('regular_price', 10, 0)->default(0);
            $table->decimal('sale_price', 10, 0)->default(0);
            $table->decimal('discount', 5, 2)->default(0.00);
            $table->string('currency', 20);
            $table->string('image', 255);
            $table->tinyInteger('is_reccomended')->default(0);
            $table->longText('product_description_tab_content');
            $table->longText('product_ingredients_tab_content');
            $table->longText('product_usage_tab_content');
            $table->string('tab_bg', 255);
        });

        DB::statement('INSERT INTO `products` (`id`, `slug`, `title`, `excerpt`, `content`, `descrtitle`, `descrtext`, `descr`, `regular_price`, `sale_price`, `discount`, `currency`, `image`, `is_reccomended`, `product_description_tab_content`, `product_ingredients_tab_content`, `product_usage_tab_content`, `tab_bg`) VALUES
(1, \'крем-для-рук-и-ногтей\', \'Крем для рук и ногтей\', \'питательный крем 250 мл\', \'\', \'Крем для рук и ногтей\', \'Крем для рук и ногтей\', \'Крем для рук и ногтей\', \'115\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/10/250ml_1_07-600x587.jpg\', 1, \'<p style=\"text-align: left;\" align=\"center\">\r\n                                                    <strong>Крем для самой чувствительной кожи</strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\" align=\"center\">\r\n                                                    <strong>Использование защитного детского крема&nbsp;\r\n                                                        <span>Crema</span>\r\n                                                        <span>&nbsp;</span>\r\n                                                        <span>Protettiva</span>\r\n                                                        <span>&nbsp;</span>\r\n                                                        <span>dei</span><span>&nbsp;</span>\r\n                                                        <span>Piccoli</span>\r\n                                                    </strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\" align=\"center\">\r\n                                                    <strong>может стать отличным способом профилактики многих дерматологических симптомов.</strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <em>Детская кожа нуждается в бережном уходе с первых дней жизни.</em>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <em>Правильный выбор косметических средств позволит надёжно защитить ещё неокрепший слой эпидермиса</em>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <em>от негативного влияния бактерий и сохранить ее естественную увлажнённость.</em>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    Главными функциями, которые выполняет крем является увлажнение и защита кожи малыша\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    от воздействия внешних факторов. Крем насыщает эпидермис питательными веществами и влагой,\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    восстанавливая и сохраняя их естественный запас. В его состав входят специальные смягчающие кожу\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    компоненты на основе природных ингредиентов.\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    Благодаря витаминам, минералам и маслам она остаётся гладкой и нежной.\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <strong>Результаты:</strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    — уменьшилось количество покраснений – 97%\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    — ранки на коже быстрее заживаются – 85%\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    — исчезло раздражение на коже – 88%\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    * По результатам потребительского тестирования, подводимого в течении 6 недель\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    с участием 52 женщин, которые использовали Защитный детский крем Alga Ph при уходе за кожей дитей.\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\', \'<p style=\"text-align: left;\"><strong>Состав крема:</strong></p>\r\n                                                <p style=\"text-align: left;\">— гидролат ромашки</p>\r\n                                                <p style=\"text-align: left;\">— масло абрикосовых косточек</p>\r\n                                                <p style=\"text-align: left;\">— OLIVEM 1000</p>\r\n                                                <p style=\"text-align: left;\">— масло ши</p>\r\n                                                <p style=\"text-align: left;\">— масло виноградных косточек</p>\r\n                                                <p style=\"text-align: left;\">— Д-пантенол</p>\r\n                                                <p style=\"text-align: left;\">— витамин F</p>\r\n                                                <p style=\"text-align: left;\">— экстракт календулы</p>\r\n                                                <p style=\"text-align: left;\">— Euxyl PE 9010</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\', \'<p><strong>Способ нанесения:</strong></p>\r\n                                                <p>\r\n                                                    Крем необходимо нанести тонким слоем на внутреннюю поверхность собственных ладоней,\r\n                                                </p>\r\n                                                <p>\r\n                                                    после чего дайте ему нагреться 15-20 секунд. Теперь крем можно наносить на лицо и тело ребенка.\r\n                                                </p>\r\n                                                <p>\r\n                                                    Особое внимание уделите участкам кожи с явными признаками покраснением или шелушением.\r\n                                                </p>\r\n                                                <p>\r\n                                                    При использовании подгузников, крем <strong><span>Crema</span> <span lang=\"EN-US\">Protettiva</span> <span>dei</span> <span>Piccoli</span></strong> рекомендуется применять ежедневно.\r\n                                                </p>\', \'/uploads/2018/08/Nastojka-pri-miome-matki.jpg\'),
(2, \'крем-для-век\', \'Крем для век\', \'крем для контура глаз 5 мл\', \'\', \'Крем для век\', \'Крем для контура глаз Alga Ph снимает отечность и убирает темные круги под глазами. Активные компоненты в его составе обеспечивают необходимую защиту, питание и гидратацию нежной коже вокруг глаз.\', \'Крем для контура глаз Alga Ph снимает отечность и убирает темные круги под глазами. Активные компоненты в его составе обеспечивают необходимую защиту, питание и гидратацию нежной коже вокруг глаз.\', \'350\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/08/5-ml_0004-600x587.jpg\', 1, \'\', \'\', \'\', \'/uploads/2018/08/1_1276029262_C7E5EBE5EDFBE920F7E0E9203035.jpg\'),
(3, \'питательный-крем\', \'Питательный крем\', \'ночной питательный крем 5 мл\', \'\', \'Питательный крем\', \'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание. <br /> Помимо увлажнения он насыщает кожу минералами, витаминами, аминокислотами и протеинами.\', \'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание.  Помимо увлажнения он насыщает кожу минералами, витаминами и аминокислотами.\', \'735\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/08/50-ml_0005-600x587.jpg\', 1, \'\', \'\', \'\', \'\'),
(4, \'скраб-крем-апельсин\', \'Скраб-крем апельсин\', \'сахарный крем-скраб 180 г\', \'\', \'Скраб-крем апельсин\', \'Крем-скраб\', \'Крем-скраб\', \'75\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/10/180-g_scrub-cream__01-600x587.jpg\', 1, \'\', \'\', \'\', \'\'),
(5, \'скраб-крем-дыня\', \'Скраб-крем дыня\', \'сахарный крем-скраб 180 г\', \'\', \'Скраб-крем дыня\', \'Крем-скраб\', \'Крем-скраб\', \'75\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/10/180-g_scrub-cream__03-600x587.jpg\', 1, \'\', \'\', \'\', \'\'),
(6, \'детский-крем\', \'Детский крем\', \'гипоалергенный крем 50 мл\', \'\', \'Детский крем\', \'Использование защитного гипоалергеного крема Crema Protettiva dei Piccoli может стать отличным способом профилактики многих дерматологических симптомов.\', \'Гипоаллергенный крем Alga Ph великолепно подойдет для особо чувствительной нежной кожи. Крем быстро заживляет и увлажняет кожу, а его состав дает возможность использоваться крем с первых месяцев жизни.\', \'595\', \'500\', \'16.00\', \'грн\', \'/uploads/2018/08/50-ml_0006-600x587.jpg\', 1, \'\', \'\', \'\', \'\'),
(7, \'увлажняющий-крем-50мл\', \'Увлажняющий крем\', \'дневной увлажняющий крем 50 мл\', \'\', \'Увлажняющий крем\', \'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.<br/> Его компоненты притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.\', \'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.  Его компоненты притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.\', \'665\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/08/50-ml_0007-600x587.jpg\', 1, \'\', \'\', \'\', \'\'),
(8, \'увлажняющий-крем-5мл\', \'Увлажняющий крем\', \'дневной увлажняющий крем 5 мл\', \'\', \'Увлажняющий крем\', \'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.<br/> Крем притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.\', \'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.  Крем притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.\', \'210\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/08/5-ml_0003-600x587.jpg\', 1, \'\', \'\', \'\', \'\'),
(9, \'ночной-питательный-крем\', \'Питательный крем\', \'ночной питательный крем 5 мл\', \'\', \'Питательный крем\', \'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание.<br/> Помимо увлажнения он насыщает кожу минералами, витаминами и аминокислотами.\', \'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание.  Помимо увлажнения он насыщает кожу минералами, витаминами, аминокислотами и протеинами.\', \'245\', \'215\', \'12.00\', \'грн\', \'/uploads/2018/07/5-ml_0002-600x587.jpg\', 1, \'\', \'\', \'\', \'\'),
(10, \'скраб-крем-клубника\', \'Скраб-крем клубника\', \'сахарный крем-скраб 180 г\', \'\', \'Скраб-крем клубника\', \'Крем-скраб\', \'Крем-скраб\', \'75\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/10/180-g_scrub-cream__02-600x587.jpg\', 0, \'\', \'\', \'\', \'\'),
(11, \'скраб-крем-ананас\', \'Скраб-крем ананас\', \'сахарный крем-скраб 180 г\', \'\', \'Скраб-крем ананас\', \'Крем-скраб\', \'Крем-скраб\', \'75\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/10/180-g_scrub-cream__04-600x587.jpg\', 0, \'\', \'\', \'\', \'\'),
(12, \'скраб-крем-красные-ягоды\', \'Скраб-крем красные ягоды\', \'сахарный крем-скраб 180 г\', \'\', \'Скраб-крем красные ягоды\', \'Крем-скраб\', \'Крем-скраб\', \'75\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/10/180-g_scrub-cream__05-600x587.jpg\', 0, \'\', \'\', \'\', \'\'),
(13, \'скраб-крем-фруктовый-микс\', \'Скраб-крем фруктовый микс\', \'сахарный крем-скраб 180 г\', \'\', \'Скраб-крем фруктовый микс\', \'Крем-скраб\', \'Крем-скраб\', \'75\', \'0\', \'0.00\', \'грн\', \'/uploads/2018/10/180-g_scrub-cream__05-600x587.jpg\', 0, \'\', \'\', \'\', \'\');
');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
